import { PortableTextBlock } from '@portabletext/types';
import {
  TSanityDocument,
  TSanityImage
} from '@/types'

export interface TPress extends TSanityDocument {
  _type: 'press';
  title: string;
  publication: string;
  author?: string;
  publishedDate: string;
  excerpt?: string;
  content?: PortableTextBlock[];
  externalUrl?: string;
  featuredImage?: TSanityImage;
  featured: boolean;
  category?: 'review' | 'interview' | 'feature' | 'news' | 'profile' | 'exhibition';
}

export interface TPressPreview {
  title: string;
  publication: string;
  publishedDate: string;
  excerpt?: string;
  featuredImage?: TSanityImage;
  featured: boolean;
  category?: TPress['category'];
}

export interface TPressListItem {
  _id: string;
  _type: 'press';
  title: string;
  publication: string;
  publishedDate: string;
  excerpt?: string;
  featuredImage?: TSanityImage;
  featured: boolean;
  category?: TPress['category'];
}