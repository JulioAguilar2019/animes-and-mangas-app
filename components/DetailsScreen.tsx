import { AntDesign } from '@expo/vector-icons';
import { Chapters } from './Chapters';
import { Characters } from './Characters';
import { DetailInformation } from './DetailInformation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NotAvailable } from './NotAvailable';
import { RootStackParamList } from '../types';
import { useAnimeCharacters } from '../hooks/useAnimeCharacters';
import { useEpisodes, useChaptersManga } from '../hooks/';
import { useMangaCharacters } from '../hooks/useMangaCharacters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import React from 'react'
import tw from 'twrnc';


interface Props extends NativeStackScreenProps<RootStackParamList, 'DetailsScreen'> {
    isLoading: boolean
}

export const DetailsScreen = ({ route, isLoading }: Props) => {

    const { top } = useSafeAreaInsets()
    const { attributes } = route.params
    const { charactersAnime } = useAnimeCharacters(route.params.id)
    const { chapters } = useChaptersManga(route.params.id)
    const { episodes } = useEpisodes(route.params.id)
    const { charactersManga } = useMangaCharacters(route.params.id)


    return (
        <ScrollView style={{ marginTop: top + 10 }}>
            <View style={styles.container}>
                <ImageBackground source={{ uri: attributes.coverImage?.original }} style={styles.image} borderRadius={10}>
                    {
                        route.params.type === 'anime' ?
                            <TouchableOpacity
                                onPress={() => {

                                    if (attributes.youtubeVideoId != null) {
                                        Linking.openURL(`vnd.youtube://${attributes.youtubeVideoId}`)

                                    }
                                }}
                                activeOpacity={0.8}
                                style={tw`py-2 px-5 ml-1 mb-6 bg-red-500 rounded-full w-35 flex flex-row justify-between`}>
                                <Text style={tw`text-white font-bold mr-3`}>Watch trailer</Text>
                                <AntDesign name="play" size={20} color="white" />
                            </TouchableOpacity>
                            :
                            <View></View>
                    }
                </ImageBackground>
            </View>
            <DetailInformation data={route.params} />
            <Text style={tw`text-2xl text-center mx-2 my-2`}>Chapters</Text>
            {
                route.params.type === 'anime' ?
                    <View>
                        <FlatList
                            data={episodes}
                            renderItem={({ item: episodes }) =>
                                <Chapters data={route.params} episodes={episodes} />
                            }
                            keyExtractor={(episodes) => episodes.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        <Text style={tw`text-2xl text-center mx-2 my-2`}>Characters</Text>

                        <FlatList
                            data={charactersAnime}
                            renderItem={({ item: charactersAnime }) =>
                                <Characters data={route.params} characters={charactersAnime} />
                            }
                            keyExtractor={(charactersAnime) => charactersAnime.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false} />


                    </View>
                    :
                    chapters?.attributes.length != null ?

                        <Chapters data={route.params} episodes={chapters} />


                        :
                        <View>
                            <NotAvailable />
                            <Text style={tw`text-2xl mx-2 my-2 text-center`}>Characters</Text>
                            <FlatList
                                data={charactersManga}
                                renderItem={({ item: charactersManga }) =>
                                    <Characters data={route.params} characters={charactersManga} />
                                }
                                keyExtractor={(charactersManga) => charactersManga.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false} />
                        </View>


            }


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '90%',
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    container: {
        minWidth: '90%',
        maxHeight: 200,
        marginVertical: 1,
        marginHorizontal: 5,
    }
})