import {
    TSanityDocument,
    TSanitySlug,
    TSanityImage,
    TArtworkImage,
    TVideoAsset,
    TAudioAsset
} from '@/types';

export interface TArtwork extends TSanityDocument {
  _type: 'artwork';
  title: string;
  slug: TSanitySlug;
  year: number;
  medium: string;
  category: 'painting' | 'drawing' | 'sculpture' | 'photography' | 'video' | 'digital' | 'mixed-media' | 'installation' | 'other';
  description?: string;
  mainImage?: TSanityImage;
  assets?: Array<TArtworkImage | TVideoAsset | TAudioAsset>;
  dimensions?: string;
  featured: boolean;
  tags?: string[];
}

export interface TArtworkPreview {
  title: string;
  year?: number;
  mainImage?: TSanityImage;
  slug: TSanitySlug;
  category: TArtwork['category'];
  featured: boolean;
}

export interface TArtworkListItem {
  _id: string;
  _type: 'artwork';
  title: string;
  slug: TSanitySlug;
  year: number;
  category: TArtwork['category'];
  mainImage?: TSanityImage;
  featured: boolean;
}