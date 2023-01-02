import { useState, useEffect } from 'react';
import { IAnime, DatumAnime } from '../interfaces/index';
import { api } from '../services/api';

interface Props {
  animes: DatumAnime[];
  isLoading: boolean;
}

export const useAnime = () => {
  const [animeList, setAnimeList] = useState<Props>({
    animes: [],
    isLoading: true,
  });

  const getAnimes = async () => {
    const response = await api.get<IAnime>('/trending/anime');

    setAnimeList({
      animes: response.data.data,
      isLoading: false,
    });
  };

  useEffect(() => {
    getAnimes();
  }, []);

  return {
    ...animeList,
  };
};
