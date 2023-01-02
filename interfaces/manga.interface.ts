export interface IManga {
  data: DatumManga[];
}

export interface DatumManga {
  id: string;
  type: Type;
  links: DatumLinks;
  attributes: Attributes;
  relationships: { [key: string]: Relationship };
}

export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: { [key: string]: string };
  userCount: number;
  favoritesCount: number;
  startDate: Date;
  endDate: Date | null;
  nextRelease: null;
  popularityRank: number;
  ratingRank: number;
  ageRating: AgeRating;
  ageRatingGuide: null | string;
  subtype: Type;
  status: Status;
  tba: null;
  posterImage: PosterImage;
  coverImage: CoverImage | null;
  episodeCount?: number | null;
  chapterCount: number | null;
  volumeCount: number | null;
  serialization: null | string;
  mangaType: Type;
}

export enum AgeRating {
  G = 'G',
  PG = 'PG',
  R = 'R',
}

export interface CoverImage {
  tiny: string;
  large: string;
  small: string;
  original: string;
  meta: CoverImageMeta;
  tiny_webp?: string;
  large_webp?: string;
  small_webp?: string;
}

export interface CoverImageMeta {
  dimensions: PurpleDimensions;
}

export interface PurpleDimensions {
  tiny: Large;
  large: Large;
  small: Large;
  tiny_webp?: Large;
  large_webp?: Large;
  small_webp?: Large;
}

export interface Large {
  width: number;
  height: number;
}

export enum Type {
  Manga = 'manga',
  Manhua = 'manhua',
  Oel = 'oel',
}

export interface PosterImage {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
  meta: PosterImageMeta;
}

export interface PosterImageMeta {
  dimensions: FluffyDimensions;
}

export interface FluffyDimensions {
  tiny: Large;
  large: Large;
  small: Large;
  medium: Large;
}

export enum Status {
  Current = 'current',
  Finished = 'finished',
}

export interface Titles {
  en_us?: string;
  zh_cn?: string;
  en?: string;
  en_jp?: string;
  ja_jp?: string;
  ko_kr?: string;
  en_cn?: string;
}

export interface DatumLinks {
  self: string;
}

export interface Relationship {
  links: RelationshipLinks;
}

export interface RelationshipLinks {
  self: string;
  related: string;
}
