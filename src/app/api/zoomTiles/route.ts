import { NextRequest, NextResponse } from 'next/server';
import { validateSanityAsset } from '@/utils/validateSanityAsset';
import { Storage } from '@google-cloud/storage';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import os from 'os';

interface TZoomTileRequestBody {
    uuid: string;
}

/*
const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: {
    client_email: process.env.GCS_CLIENT_EMAIL,
    private_key: process.env.GCS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});
*/

// Initialize Google Cloud Storage
console.log('=== DEBUGGING GCS CREDENTIALS ===');
console.log('Project ID:', process.env.GCS_PROJECT_ID);
console.log('Client Email:', process.env.GCS_CLIENT_EMAIL);
console.log('Private Key length:', process.env.GCS_PRIVATE_KEY?.length);
console.log('Private Key first 50 chars:', process.env.GCS_PRIVATE_KEY?.substring(0, 50));
console.log('Private Key has \\n:', process.env.GCS_PRIVATE_KEY?.includes('\\n'));
console.log('Private Key has actual newline:', process.env.GCS_PRIVATE_KEY?.includes('\n'));

const privateKey = process.env.GCS_PRIVATE_KEY?.replace(/\\n/g, '\n');
console.log('After replace - first 50 chars:', privateKey?.substring(0, 50));
console.log('After replace - has actual newline:', privateKey?.includes('\n'));
console.log('=== END DEBUG ===');

const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: {
    client_email: process.env.GCS_CLIENT_EMAIL,
    private_key: privateKey,
  },
});

const bucket = storage.bucket(process.env.GCS_BUCKET_NAME!);

// Helper function to upload a directory recursively to GCS
async function uploadDirectoryToGCS(
  localDir: string,
  gcsPrefix: string
): Promise<{ filesUploaded: number; totalBytes: number }> {
  const files = fs.readdirSync(localDir);
  let filesUploaded = 0;
  let totalBytes = 0;

  for (const file of files) {
    const localPath = path.join(localDir, file);
    const stat = fs.statSync(localPath);

    if (stat.isDirectory()) {
      // Recursively upload subdirectories
      const result = await uploadDirectoryToGCS(
        localPath,
        `${gcsPrefix}/${file}`
      );
      filesUploaded += result.filesUploaded;
      totalBytes += result.totalBytes;
    } else {
      // Upload file
      const gcsPath = `${gcsPrefix}/${file}`;
      await bucket.upload(localPath, {
        destination: gcsPath,
        metadata: {
          cacheControl: 'public, max-age=31536000', // Cache for 1 year
        },
      });
      filesUploaded++;
      totalBytes += stat.size;
      console.log(`✓ Uploaded: ${gcsPath}`);
    }
  }

  return { filesUploaded, totalBytes };
}

export async function POST(request: NextRequest) {
  let tempDir: string | null = null;

  try {
    const body = await request.json();
    if (!isValidZoomTileRequest(body)) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { uuid } = body;
    const asset = await validateSanityAsset(uuid);
    
    if ('valid' in asset && !asset.valid) {
      return NextResponse.json(
        { error: asset.error || 'Invalid asset' },
        { status: 400 }
      );
    }

    if(!('url' in asset)) {
      return NextResponse.json(
        { error: 'Asset does not contain a URL' },
        { status: 400 }
      );
    }

    const { assetId } = asset;
    console.log('Validated asset:', assetId);

    // Download the image
    console.log('Downloading image from Sanity...');
    const response = await fetch(asset.url);
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch asset image' },
        { status: 500 }
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Prepare temp directory
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), `dzi-${assetId}-`));
    const dziOutputPath = path.join(tempDir, assetId);

    // Generate DZI tiles
    console.log('Generating DZI tiles...');
    const startTime = Date.now();
    
    await sharp(buffer)
      .tile({
        size: 256,
        layout: 'dz',
        overlap: 1,
        container: 'fs',
      })
      .toFile(dziOutputPath);

    const processingTime = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`DZI tiles generated in ${processingTime}s`);

    // Upload to Google Cloud Storage
    console.log('\nUploading to Google Cloud Storage...');
    const uploadStartTime = Date.now();

    // Upload the .dzi manifest file
    const dziFile = `${assetId}.dzi`;
    const dziFilePath = path.join(tempDir, dziFile);
    
    await bucket.upload(dziFilePath, {
      destination: `${assetId}/${dziFile}`,
      metadata: {
        cacheControl: 'public, max-age=31536000',
        contentType: 'application/xml',
      },
    });
    console.log(`✓ Uploaded: ${assetId}/${dziFile}`);

    // Upload all tile directories
    const tilesDir = path.join(tempDir, `${assetId}_files`);
    const uploadResult = await uploadDirectoryToGCS(tilesDir, `${assetId}/${assetId}_files`);

    const uploadTime = ((Date.now() - uploadStartTime) / 1000).toFixed(2);
    console.log(`\n✓ Upload complete in ${uploadTime}s`);
    console.log(`Total files uploaded: ${uploadResult.filesUploaded + 1}`); // +1 for .dzi file
    console.log(`Total size: ${(uploadResult.totalBytes / 1024 / 1024).toFixed(2)} MB`);

    // Clean up temp directory
    fs.rmSync(tempDir, { recursive: true, force: true });
    tempDir = null;

    // Construct the base URL for the tiles
    const baseUrl = process.env.TILES_BASE_URL || `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME}`;
    const dziUrl = `${baseUrl}/${assetId}/${dziFile}`;

    return NextResponse.json(
      { 
        message: 'DZI tiles generated and uploaded successfully',
        assetId,
        dziUrl,
        tilesUrl: `${baseUrl}/${assetId}/${assetId}_files`,
        stats: {
          processingTimeSeconds: parseFloat(processingTime),
          uploadTimeSeconds: parseFloat(uploadTime),
          totalFiles: uploadResult.filesUploaded + 1,
          totalSizeMB: parseFloat((uploadResult.totalBytes / 1024 / 1024).toFixed(2)),
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing request:', error);
    
    // Clean up temp directory if it exists
    if (tempDir && fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }

    return NextResponse.json(
      { error: 'Failed to process request', details: String(error) },
      { status: 500 }
    );
  }
}

function isValidZoomTileRequest(body: TZoomTileRequestBody): body is TZoomTileRequestBody {
  return (
    typeof body === 'object' &&
    body !== null &&
    typeof body.uuid === 'string' &&
    body.uuid.length > 0
  );
}
/*
    test this in curl with 
    curl -L -X POST http://192.168.86.43:3000/api/zoomTiles \
    -H "Content-Type: application/json" \
    -d '{"uuid": "image asset _id"}'
*/