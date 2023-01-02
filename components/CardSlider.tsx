import { View, Text, FlatList } from 'react-native'
import { DatumAnime, DatumManga } from '../interfaces'
import { Card } from './Card'
import tw from 'twrnc';

type Props = {
    titleAnime: string,
    titleManga: string,
    animeData: DatumAnime[],
    mangaData: DatumManga[],
    isLoading: boolean,

}


export const CardSlider = ({ titleAnime, animeData, titleManga, mangaData, isLoading }: Props) => {


    return (

        <View style={tw`mb-4
        `}>

            <Text style={tw`text-lg mx-2 my-2`}>{titleAnime}</Text>
            <FlatList
                data={animeData}
                renderItem={({ item: animeItem }) =>
                    <Card data={animeItem} isLoading={isLoading} />
                }
                keyExtractor={(animeItem) => animeItem.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            />

            <Text style={tw`text-lg mx-2 my-2`}>{titleManga}</Text>
            <FlatList
                data={mangaData}
                renderItem={({ item: mangaItem }) =>
                    <Card data={mangaItem} isLoading={isLoading} />
                }
                keyExtractor={(mangaItem) => mangaItem.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>


    )
}

