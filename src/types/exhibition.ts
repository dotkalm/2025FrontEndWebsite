import { PortableTextBlock } from '@portabletext/types';
import { 
  type Image, 
  type Document, 
  type TArtistMin,
  EXHIBITION_TYPES,
} from '@/types';

export interface Exhibition {
  _id: string;
  title: string;
  city?: string;
  startDate: string;
  endDate: string;
  offsite?: boolean;
  published?: boolean;
  descriptionRaw?: PortableTextBlock[];
  shortDescriptionRaw?: PortableTextBlock[];
  images?: Image[];
  documents?: Document[];
  openingSoon?: boolean;
  openingSoonLabel?: string;
  artists?: Pick<TArtistMin, 'fullName'>[];
  namePrefix?: boolean;
}

export type ExhibitionMin = Pick<Exhibition, '_id' | 'title' | 'startDate' | 'endDate' | 'city' | 'artists' | 'namePrefix'> & { slug: string };

export interface TExhibitionResponse {
  allExhibition: Exhibition[];
}

export interface TArtistExhibitionMin {
  _id: string;
  artists: TArtistMin[];
  endDate: string;
  offsite: boolean;
  startDate: string;
  title: string;
  city?: string;
}

export type TArtistExhibitionsArrayMin = TArtistExhibitionMin[];

export interface TArtistExhibitionSubTypes {
  [EXHIBITION_TYPES.SOLO]?: TArtistExhibitionsArrayMin;
  [EXHIBITION_TYPES.GROUP]?: TArtistExhibitionsArrayMin;
  [EXHIBITION_TYPES.OFFSITE]?: TArtistExhibitionsArrayMin;
}

export type TAllArtistExhibitionsSubTypes = Record<string, TArtistExhibitionsArrayMin>;