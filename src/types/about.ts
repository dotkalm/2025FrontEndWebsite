import { PortableTextBlock } from '@portabletext/types';
import {
    TSanityDocument,
    TSanityImage
} from '@/types';

export interface TAbout extends TSanityDocument {
  _type: 'about';
  title: string;
  content: PortableTextBlock[];
  image?: TSanityImage;
}