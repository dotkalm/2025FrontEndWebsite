import { PortableTextBlock } from '@portabletext/types';

export interface TNewsResponse {
  allNews: News[];
}

export interface News {
  _id: string;
  _type: string;
  _key?: string;
  title: string;
  date: string;
  contentRaw: PortableTextBlock[];
  link: string;
  published: boolean;
}