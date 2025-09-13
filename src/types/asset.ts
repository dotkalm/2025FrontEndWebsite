import { PortableTextBlock } from '@portabletext/types';
import {
  TSanityFile, 
  TSanityImage
} from '@/types'

export interface TMetadata {
  lqip: string;
  dimensions: {
    width: number;
    height: number;
  };
  blurHash: string;
}

export interface TAsset {
  url: string;
  _id: string;
  size?: number;
  metadata: TMetadata;
};

export interface TImageData {
  asset: TAsset;
};

export interface TImageDocument {
  titleRaw?: PortableTextBlock[];
  captionRaw?: PortableTextBlock[];
  photoCredit?: string;
  image: TImageData;
};

export interface Image {
  _key: string;
  _type: string;
  image: TImageDocument;
};

export interface Document {
  title: string;
  documentType: string;
  file: {
    asset: {
      url: string;
    };
  };
};

// Types for the helper functions
export type TMakeResponsiveContain = (
  imageAsset: TAsset, 
  blurred?: boolean, 
  maxWidths?: number[]
) => Record<string, string>;

export type TReturnOptimizedImageUrl = (
  asset: TAsset,
  maxWidth?: number,
  maxHeight?: number
) => string;


// remove the above 

export interface TArtworkImage extends Omit<TSanityImage, '_type'> {
  _type: 'artworkImage';
}

export interface TVideoAsset {
  _type: 'videoAsset';
  file: TSanityFile;
  title?: string;
  description?: string;
}

export interface TAudioAsset {
  _type: 'audioAsset';
  file: TSanityFile;
  title?: string;
  description?: string;
}

export type TArtworkAsset = TArtworkImage | TVideoAsset | TAudioAsset;

