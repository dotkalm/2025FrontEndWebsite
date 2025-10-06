import { NextRequest, NextResponse } from 'next/server';
import { validateSanityAsset } from '@/utils/validateSanityAsset';

interface TZoomTileRequestBody {
    uuid: string;
    url: string;
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
    const { uuid, url } = body;
    const validation = await validateSanityAsset(uuid);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error || 'Invalid asset' },
        { status: 400 }
      );
    }
     
    // Log it to verify what you're receiving
    console.log('Received body:', { uuid, url });
    
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


function isValidZoomTileRequest(body: any): body is TZoomTileRequestBody {
  return (
    typeof body === 'object' &&
    body !== null &&
    typeof body.uuid === 'string' &&
    typeof body.url === 'string' &&
    body.uuid.length > 0 &&
    body.url.length > 0
  );
};

/*
    test this in curl with 
    curl -L -X POST http://192.168.86.43:3000/api/zoomTiles \
    -H "Content-Type: application/json" \
    -d '{"test": "data", "image": "path/to/image.jpg"}'
*/