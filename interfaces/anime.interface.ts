export interface IAnime {
  data: DatumAnime[];
}

export interface DatumAnime {
  id: string;
  type: TypeEnum;
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
  nextRelease: Date | null;
  popularityRank: number;
  ratingRank: number;
  ageRating: null | string;
  ageRatingGuide: null | string;
  subtype: ShowTypeEnum;
  status: Status;
  tba: null;
  posterImage: PosterImage;
  coverImage: CoverImage;
  chapterCount?: number | null;
  episodeCount: number | null;
  episodeLength: number | null;
  totalLength: number;
  youtubeVideoId: string;
  showType: ShowTypeEnum;
  nsfw: boolean;
}

export interface CoverImage {
  tiny: string;
  large: string;
  small: string;
  original: string;
  meta: Meta;
}

export interface Meta {
  dimensions: Dimensions;
}

export interface Dimensions {
  tiny: Large;
  large: Large;
  small: Large;
  medium?: Large;
}

export interface Large {
  width: number;
  height: number;
}

export interface PosterImage {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
  meta: Meta;
}

export enum ShowTypeEnum {
  Tv = 'TV',
}

export enum Status {
  Current = 'current',
  Finished = 'finished',
}

export interface Titles {
  en?: string;
  en_jp: string;
  ja_jp: string;
  en_us?: string;
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

export enum TypeEnum {
  Anime = 'anime',
}
