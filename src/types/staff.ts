// Types for GalleryStaff
export interface GalleryStaff {
  _id: string;
  active: boolean;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
}

export interface TGalleryStaffResponse {
  allGalleryStaff: GalleryStaff[];
}
