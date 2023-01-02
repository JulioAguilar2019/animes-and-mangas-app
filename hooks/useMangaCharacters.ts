import { api } from '../services/api';
import { DatumCharacters, ICharacters } from '../interfaces/';
import { useState, useEffect } from 'react';

interface Props {
  charactersManga: DatumCharacters | null;
  isLoading: boolean;
}

export const useMangaCharacters = (mangaId: string) => {
  const [charactersList, setCharactersList] = useState<Props>({
    charactersManga: null,
    isLoading: true,
  });

  const getData = async () => {
    const response = await api.get(`/manga/${mangaId}/characters`);
    const characters = response.data.data;

    const charactersData = characters.map(async (character) => {
      const characterData = await api.get(
        `/media-characters/${character.id}/character`
      );
      return characterData.data.data;
    });
    const charactersDataResolved = await Promise.all(charactersData);
    // console.log(charactersDataResolved);
    setCharactersList({
      charactersManga: charactersDataResolved,
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
