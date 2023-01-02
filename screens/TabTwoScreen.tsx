import { Card } from '../components/';
import { DatumAnime } from '../interfaces/anime.interface';
import { DatumManga } from '../interfaces/manga.interface';
import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';

export default function TabTwoScreen() {
    const [favorites, setFavorites] = useState<DatumAnime[] | DatumManga[]>()

    const getFavorite = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favorites')

            if (jsonValue !== null) {
                const arr = JSON.parse(jsonValue)
                const ids = arr.map((o: DatumAnime | DatumManga) => o.id)

                return arr.filter(({ id }: DatumAnime | DatumManga, index: number) => !ids.includes(id, index + 1))
            }

            return null
        } catch (e) {
            // saving error
        }
    }

    useEffect(() => {
        getFavorite().then((data) => {
            setFavorites(data)
        });
    },)

    return (
        <ScrollView style={tw`flex-1 bg-gray-200`}>
            <View style={tw`flex flex-row flex-wrap justify-start py-3`}>
                {
                    favorites?.map((item: DatumAnime | DatumManga) => (
                        <Card key={item?.id} data={item} isLoading={false} />
                    ))
                }
            </View>
        </ScrollView>
    );
}
