import { PortableTextBlock } from '@portabletext/types';
import { Exhibition, GalleryStaff } from '@/types';

export interface GalleryLocation {
  _key: string;
  description?: string;
  accessible: boolean;
  accessibilityNote?: string;
  map?: string;
  city: string;
  neighborhood?: string;
  phone?: string;
  hours?: string;
  email?: string;
  zipcode?: string;
  streetAddress: string;
  streetAddress2?: string;
  _type: string;
  exhibition?: Exhibition;
}

export interface Gallery {
  _id: string;
  about: TGalleryAbout;
  locations: GalleryLocation[];
  mailingList: MailingListConfig;
}

export interface MailingListConfig {
  _type: string;
  cta: string;
  placeholder: string;
  button: string;
  successMessage: string;
  errorMessage: string;
  validationMessage: string;
}

export interface TGalleryResponse {
  Gallery: Gallery;
}

export interface TGalleryAbout {
  descriptionRaw: PortableTextBlock[];
  heading: string;
  landingPageAnnouncement?: boolean;
  turnOffFooter?: boolean;
  inquiryEmail: string;
  landingPageAnnouncementDescriptionRaw?: PortableTextBlock[];
  numberOfSecondsToShowAnnouncements?: number;
  staff: GalleryStaff[];
}