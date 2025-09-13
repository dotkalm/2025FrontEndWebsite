import { type Image, type Document } from '@/types';

// Types for Artist and PastArtists
export interface Artist {
  _id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  worksBy?: boolean;
  images?: Image[];
  documents?: Document[];
  published?: boolean;
}

export interface TArtistResponse {
  allArtist: Artist[];
}

export interface TArtistMin {
  _id: string;
  fullName: string;
  slug: string;
  worksBy?: boolean;
  published?: boolean;
}