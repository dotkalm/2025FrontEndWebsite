
// Base TSanity types
export interface TSanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface TSanityImageAsset {
  _type: 'sanity.imageAsset';
  _id: string;
  url: string;
  mimeType: string;
  assetId: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
      aspectRatio: number;
    };
    lqip: string;
    blurHash: string;
  };
}

export interface TSanityFileAsset {
  _type: 'sanity.fileAsset';
  _id: string;
  url: string;
  originalFilename: string;
  mimeType: string;
  size: number;
}

export interface TSanityImage {
  _type: 'image';
  asset: TSanityImageAsset;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  alt?: string;
  caption?: string;
}

export interface TSanityFile {
  _type: 'file';
  asset: TSanityFileAsset;
}

export interface TSanitySlug {
  _type: 'slug';
  current: string;
}

// Block content types
export interface TSanityBlockContent {
  _type: 'block';
  _key: string;
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'blockquote';
  children: Array<{
    _type: 'span';
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: 'link';
    _key: string;
    href: string;
  }>;
}