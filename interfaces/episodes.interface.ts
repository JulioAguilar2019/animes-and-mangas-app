export interface IEpisodesAnime {
  data: DatumEpisodes[];
  links: RootObjectLinks;
  meta: RootObjectMeta;
}

export interface DatumEpisodes {
  attributes: Attributes;
  id: string;
  links: DatumLinks;
  relationships: Relationships;
  type: Type;
}

export interface Attributes {
  airdate: Date | null;
  canonicalTitle: null | string;
  createdAt: Date;
  description: null | string;
  length: number;
  number: number;
  relativeNumber: null;
  seasonNumber: number;
  synopsis: null | string;
  thumbnail: Thumbnail | null;
  titles: Titles;
  updatedAt: Date;
}

export interface Thumbnail {
  large: string;
  medium: string;
  meta: ThumbnailMeta;
  original: string;
  small: string;
  tiny: string;
}

export interface ThumbnailMeta {
  dimensions: Dimensions;
}

export interface Dimensions {
  large: Large;
  medium: Large;
  small: Large;
  tiny: Large;
}

export interface Large {
  height: number;
  width: number;
}

export interface Titles {
  en?: string;
}

export interface DatumLinks {
  self: string;
}

export interface Relationships {
  media: Media;
  videos: Media;
}

export interface Media {
  links: MediaLinks;
}

export interface MediaLinks {
  related: string;
  self: string;
}

export enum Type {
  Episodes = 'episodes',
}

export interface RootObjectLinks {
  first: string;
  last: string;
  next: string;
}

export interface RootObjectMeta {
  count: number;
}
