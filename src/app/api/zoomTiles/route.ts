import { NextRequest, NextResponse } from 'next/server';
import { validateSanityAsset } from '@/utils/validateSanityAsset';
import { TSanityImage, TSanityImageAsset } from '@/types';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import os from 'os';

interface TZoomTileRequestBody {
    uuid: string;
}

export async function POST(request: NextRequest) {
  try {
    // Read the request body
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
    // Download the image from asset.url
    const response = await fetch(asset.url);
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch asset image' },
        { status: 500 }
      );
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Prepare temp directory for tiles
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), assetId));
    const dziOutputDir = path.join(tempDir, 'tiles');

    // Ensure output directory exists
    fs.mkdirSync(dziOutputDir, { recursive: true });

    // Use sharp to generate DZI tiles
    await sharp(buffer)
      .tile({
        size: 256,
        layout: 'dz',
        overlap: 0,
        container: 'fs',
        basename: 'image'
      })
      .toFile(path.join(dziOutputDir, 'image.dzi'));

    // Optionally, you could return the path or serve the tiles
    console.log('DZI tiles generated at:', dziOutputDir);
    // Return just a status code
    return NextResponse.json(
      { message: 'Request received successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error reading request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
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
};

/*
    test this in curl with 
    curl -L -X POST http://192.168.86.43:3000/api/zoomTiles \
    -H "Content-Type: application/json" \
    -d '{"test": "data", "image": "path/to/image.jpg"}'
*/