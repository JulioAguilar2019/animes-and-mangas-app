import { Card, Loader, NotFound } from '../components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSearch } from '../hooks/useSearch';
import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc';

interface Props extends NativeStackScreenProps<RootStackParamList, 'SearchScreen'> { }

const SearchScreen = ({ route }: Props) => {
    const { top } = useSafeAreaInsets()
    const { search } = route.params
    const { animes, mangas, isLoading } = useSearch(search)

    return (
        <View style={tw`mt-[${top}]`}>
            <Text style={tw`text-xl mx-2 my-5`}>Animes</Text>

            {
                isLoading ? <Loader></Loader> :

                    animes.length === 0 ? <NotFound></NotFound> :

                        <FlatList
                            data={animes}
                            renderItem={({ item: animeItem }) =>
                                <Card data={animeItem} isLoading={isLoading} />
                            }
                            keyExtractor={(animeItem) => animeItem.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
            }


            <Text style={tw`text-xl mx-2 my-5`}>Mangas</Text>
            {
                isLoading ? <Loader></Loader> :

                    mangas.length === 0 ? <NotFound></NotFound> :

                        <FlatList
                            data={mangas}
                            renderItem={({ item: animeItem }) =>
                                <Card data={animeItem} isLoading={isLoading} />
                            }
                            keyExtractor={(animeItem) => animeItem.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
            }
        </View>
    )
}

export default SearchScreen