export interface IChaptersManga {
  data: DatumChaptersManga;
}

export interface DatumChaptersManga {
  attributes: Attributes;
  id: string;
  links: DataLinks;
  relationships: Relationships;
  type: string;
}

export interface Attributes {
  canonicalTitle: string;
  createdAt: Date;
  description: string;
  length: number;
  number: number;
  published: null;
  synopsis: string;
  thumbnail: null;
  titles: Titles;
  updatedAt: Date;
  volumeNumber: number;
}

export interface Titles {
  en_us: string;
}

export interface DataLinks {
  self: string;
}

export interface Relationships {
  manga: Manga;
}

export interface Manga {
  links: MangaLinks;
}

export interface MangaLinks {
  related: string;
  self: string;
}
