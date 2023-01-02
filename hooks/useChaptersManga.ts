import { api } from '../services/api';
import { DatumChaptersManga, IChaptersManga } from '../interfaces/';
import { useState, useEffect } from 'react';

interface Props {
  chapters: DatumChaptersManga | null;
  isLoading: boolean;
}

export const useChaptersManga = (id: string) => {
  const [chaptersList, setChaptersList] = useState<Props>({
    chapters: null,
    isLoading: true,
  });

  const getChaptersManga = async () => {
    try {
      const response = await api.get<IChaptersManga>(`/chapters/${id}`);
      // console.log(response.data.data);
      setChaptersList({
        chapters: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChaptersManga();
  }, []);

  return {
    ...chaptersList,
  };
};
