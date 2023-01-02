import { api } from '../services/api';
import { DatumCharacters, ICharacters } from '../interfaces/';
import { useState, useEffect } from 'react';

interface Props {
  charactersAnime: DatumCharacters | null;
  isLoading: boolean;
}

export const useAnimeCharacters = (animeId: string) => {
  const [charactersList, setCharactersList] = useState<Props>({
    charactersAnime: null,
    isLoading: true,
  });

  const getData = async () => {
    const response = await api.get(`/anime/${animeId}/characters`);
    const characters = response.data.data;

    const charactersData = characters.map(async (character) => {
      const characterData = await api.get(
        `/anime-characters/${character.id}/character`
      );
      return characterData.data.data;
    });
    const charactersDataResolved = await Promise.all(charactersData);
    // console.log(charactersDataResolved);
    setCharactersList({
      charactersAnime: charactersDataResolved,
      isLoading: false,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    ...charactersList,
  };
};
