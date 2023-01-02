export interface ICharacters {
  data: DatumCharacters;
}

export interface DatumCharacters {
  attributes: Attributes;
  id: string;
  links: DataLinks;
  relationships: Relationships;
  type: string;
}

export interface Attributes {
  canonicalName: string;
  createdAt: Date;
  description: string;
  image: Image;
  malId: number;
  name: string;
  names: Names;
  otherNames: string[];
  slug: string;
  updatedAt: Date;
}

export interface Image {
  large: string;
  medium: string;
  meta: Meta;
  original: string;
  small: string;
  tiny: string;
}

export interface Meta {
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

export interface Names {
  en: string;
  ja_jp: string;
}

export interface DataLinks {
  self: string;
}

export interface Relationships {
  castings: Castings;
  mediaCharacters: Castings;
  primaryMedia: Castings;
  quotes: Castings;
}

export interface Castings {
  links: CastingsLinks;
}

export interface CastingsLinks {
  related: string;
  self: string;
}
