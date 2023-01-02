import { api } from '../services/api';
import { DatumEpisodes, IEpisodesAnime } from '../interfaces/';
import { useState, useEffect } from 'react';

interface Props {
  episodes: DatumEpisodes[];
  isLoading: boolean;
}

export const useEpisodes = (id: string) => {
  const [episodesList, setEpisodesList] = useState<Props>({
    episodes: [],
    isLoading: true,
  });

  const getEpisodes = async () => {
    const response = await api.get<IEpisodesAnime>(`/anime/${id}/episodes`);

    setEpisodesList({
      episodes: response.data.data,
      isLoading: false,
    });
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return {
    ...episodesList,
  };
};
