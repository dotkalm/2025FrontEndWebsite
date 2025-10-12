import { NextRequest, NextResponse } from 'next/server';
import { validateSanityAsset } from '@/utils/validateSanityAsset';
import { Storage } from '@google-cloud/storage';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import os from 'os';

interface TZoomTileRequestBody {
    uuid: string;
    path: string;
}

const privateKey = process.env.GCS_PRIVATE_KEY?.replace(/\\n/g, '\n');

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
        { error: 'Invalid request body. Required fields: uuid (string) and path (string)' },
        { status: 400 }
      );
    }

    const { uuid, path: relativePath } = body;
    
    // Validate the Sanity asset to get the assetId
    const asset = await validateSanityAsset(uuid);
    
    if ('valid' in asset && !asset.valid) {
      return NextResponse.json(
        { error: asset.error || 'Invalid asset' },
        { status: 400 }
      );
    }

    if (!('assetId' in asset)) {
      return NextResponse.json(
        { error: 'Asset does not contain assetId' },
        { status: 400 }
      );
    }

    const { assetId } = asset;

    // Check if the local file exists
    const basePath = '/Users/joelholmberg/webapps/joelholmberg/images';
    const localFilePath = path.join(basePath, relativePath);
    if (!fs.existsSync(localFilePath)) {
      return NextResponse.json(
        { error: `File not found at path: ${localFilePath}` },
        { status: 400 }
      );
    }

    // Read the original TIFF file from local filesystem
    console.log(`Reading original TIFF from: ${localFilePath}`);
    const buffer = fs.readFileSync(localFilePath);

    // Log source image metadata
    const metadata = await sharp(buffer).metadata();
    console.log('Source image metadata:', {
      format: metadata.format,
      width: metadata.width,
      height: metadata.height,
      space: metadata.space,
      channels: metadata.channels,
      depth: metadata.depth,
    });

    // Prepare temp directory
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), `dzi-${assetId}-`));
    const dziOutputPath = path.join(tempDir, assetId);

    // Generate DZI tiles with high quality settings
    const startTime = Date.now();
    
    await sharp(buffer)
      .tile({
        size: 512,      // Larger tile size for better quality
        layout: 'dz',
        overlap: 2,     // Increased overlap for smoother transitions
        container: 'fs',
      })
      .toFile(dziOutputPath);

    const processingTime = ((Date.now() - startTime) / 1000).toFixed(2);

    // Upload to Google Cloud Storage
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

    // Upload all tile directories
    const tilesDir = path.join(tempDir, `${assetId}_files`);
    const uploadResult = await uploadDirectoryToGCS(tilesDir, `${assetId}/${assetId}_files`);

    const uploadTime = ((Date.now() - uploadStartTime) / 1000).toFixed(2);

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
        sourceMetadata: {
          format: metadata.format,
          width: metadata.width,
          height: metadata.height,
        },
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
    console.error('Error processing zoom tiles:', error);
    
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

function isValidZoomTileRequest(body: {
  uuid: unknown;
  path?: unknown;
}): body is TZoomTileRequestBody {
  return (
    typeof body === 'object' &&
    body !== null &&
    typeof body.uuid === 'string' &&
    body.uuid.length > 0 &&
    typeof body.path === 'string' &&
    body.path.length > 0
  );
}

/*
Test this with curl:

curl -L -X POST http://localhost:3000/api/zoomTiles \
-H "Content-Type: application/json" \
-d '{
  "uuid": "image-abc123-1920x1080-jpg",
  "path": "/Users/yourname/path/to/original.tif"
}'
*/