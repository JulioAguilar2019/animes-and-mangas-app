import { IAnime } from './../interfaces/anime.interface';
import { useState, useEffect } from 'react';
import { IManga, DatumManga } from '../interfaces/index';
import { api } from '../services/api';
import { DatumAnime } from '../interfaces/anime.interface';

interface Props {
    animes: DatumAnime[];
    mangas: DatumManga[];
    isLoading: boolean;
}

export const useSearch = (search: string) => {
    const [searchList, setSearchList] = useState<Props>({
        animes: [],
        mangas: [],
        isLoading: true,
    });

    const getSearch = async () => {
        const response = await api.get<IAnime>(`/anime?filter[text]=${search}`);
        const responseManga = await api.get<IManga>(`/manga?filter[text]=${search}`);

        const [anime, manga] = await Promise.all([response, responseManga])

        setSearchList({
            animes: anime.data.data,
            mangas: manga.data.data,
            isLoading: false,
        });
    };

    useEffect(() => {
        getSearch();
    }, []);

    return {
        ...searchList,
    };
}
  