import { useState, useEffect } from 'react';
import { IManga, DatumManga } from '../interfaces/index';
import { api } from '../services/api';

interface Props {
  mangas: DatumManga[];
  isLoadingManga: boolean;
}

export const useManga = () => {
  const [mangaList, setMangaList] = useState<Props>({
    mangas: [],
    isLoadingManga: true,
  });

  const getMangas = async () => {
    const response = await api.get<IManga>('/trending/manga');

    setMangaList({
      mangas: response.data.data,
      isLoadingManga: false,
    });
  };

  useEffect(() => {
    getMangas();
  }, []);

  return {
    ...mangaList,
  };
};
