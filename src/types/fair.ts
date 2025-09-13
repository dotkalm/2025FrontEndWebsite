import { PortableTextBlock } from '@portabletext/types';
import { type Artist, type Image } from '@/types';

export interface Fair {
  _id: string;
  title: string;
  fair: string;
  startDate: string;
  endDate: string;
  groupPresentation?: boolean;
  descriptionRaw?: PortableTextBlock[];
  images?: Image[];
  artistsReferences?: Artist[];
}

export interface TFairResponse {
  allFair: Fair[];
}

export type TFairSlugMapper = Record<string, Fair>;

export type TFairPathMaker = (fairs: Fair[]) => {
  validFairPaths: string[];
  fairSlugMapper: TFairSlugMapper;
  fairParams: string[];
}