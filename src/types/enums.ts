export enum JSON_KEYS {
  ALL_ARTIST_EXHIBITIONS = "allArtistExhibitions",
  ALL_ARTIST_GALLERY_EXHIBITIONS = "artistsGalleryExhibitions",
  ALL_ARTIST_OFFSITE_EXHIBITIONS = "artistsOffsiteExhibitions",
  ARTIST = "artist",
  ARTISTS = "artists",
  CURRENT_EXHIBITIONS = "currentExhibitions",
  EXHIBITIONS = "exhibitions",
  FAIRS = "fairs",
  GALLERY = "gallery",
  GALLERY_STAFF = "galleryStaff",
  NEWS = "news",
  PAST_EXHIBITIONS_MIN = "pastExhibitionsMin",
  SETTINGS = "settings",
};

export enum EXHIBITION_TYPES {
  GROUP = 'group',
  OFFSITE = 'offsite',
  SOLO = 'solo',
};

export enum ARTIST_ROUTES {
  GROUP = 'all',
  OFFSITE = 'selected',
  PAST = 'past',
  WORKS = 'works',
}

export enum EXHIBITION_ROUTES {
  CURRENT = 'current',
  IMAGES = 'images',
  PAST = 'past',
}

export enum ROOT_ROUTES {
  ARTISTS = 'artists',
  EXHIBITIONS = 'exhibitions',
  NEWS = 'news',
  FAIRS = 'fairs',
  INFO = 'info',
}

export enum FAIR_LABELS {
  GROUP_PRESENTATION = 'Group Presentation',
}

export enum SITEMAP_FREQUENCIES {
  ALWAYS = 'always',
  DAILY = 'daily',
  HOURLY = 'hourly',
  MONTHLY = 'monthly',
  NEVER = 'never',
  WEEKLY = 'weekly',
  YEARLY = 'yearly',
} 