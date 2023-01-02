
import { DatumAnime, DatumManga } from '../interfaces';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useToast } from "react-native-toast-notifications";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import tw from 'twrnc';


type Props = {
    data: DatumAnime | DatumManga
}

export const DetailInformation = ({ data }: Props) => {
    const toast = useToast();
    const [favoriteColor, setFavoriteColor] = useState<string | undefined>('')

    const saveFavorite = async (item: DatumAnime | DatumManga) => {
        try {
            // await AsyncStorage.clear()
            const storageFavs = await AsyncStorage.getItem('@favorites')

            if (storageFavs) {
                let favorites = JSON.parse(storageFavs)

                const is_founded = favorites.find((favorite: DatumAnime | DatumManga) => favorite.id === item.id)

                if (is_founded) {
                    favorites.splice(favorites.indexOf(is_founded), 1)

                    toast.show('This item has been removed from your favorites!', {
                        type: 'danger',
                        placement: 'center',
                        duration: 4000,
                    })
                    setFavoriteColor('bg-blue-500')
                } else {
                    favorites.push(item)

                    toast.show('This item has been added to your favorites!', {
                        type: 'success',
                        placement: 'center',
                        duration: 4000,
                    })
                    setFavoriteColor('bg-red-500')
                }

                await AsyncStorage.setItem('@favorites', JSON.stringify(favorites))

            } else {
                await AsyncStorage.setItem('@favorites', JSON.stringify([item]))

                toast.show('This item has been added to your favorites!', {
                    type: 'success',
                    placement: 'center',
                    duration: 4000,
                })
                setFavoriteColor('bg-red-500')
            }

        } catch (e) {
            // saving error
        }
    }

    const isFavorite = async () => {
        try {
            const storageFavs = await AsyncStorage.getItem('@favorites')

            if (storageFavs) {
                let favorites = JSON.parse(storageFavs)

                const is_founded = favorites.find((favorite: DatumAnime | DatumManga) => favorite.id === data.id)

                if (is_founded) {
                    return 'bg-red-500'
                } else {
                    return 'bg-blue-500'
                }
            } else {
                return 'bg-blue-500'
            }
        } catch (e) {
            // saving error
        }
    }

    useEffect(() => {
        isFavorite().then((data) => {
            setFavoriteColor(data)
        });
    },)


    return (

        <View style={tw`w-full`}>
            {/* Title */}
            <View style={tw`flex flex-row w-full mx-4`}>
                <View style={tw`flex flex-col w-1/2`}>
                    <Text style={tw`text-2xl mb-2`}>{data.attributes.canonicalTitle}</Text>
                    {/* Status */}
                    {
                        data.attributes.status === 'current' ?
                            <Text style={tw`w-3/5 capitalize text-center bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900`}>{data.attributes.status} emision</Text>
                            :
                            <Text style={tw`w-3/5 capitalize text-center bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900`}>{data.attributes.status} emision</Text>
                    }
                </View>
                <TouchableOpacity style={tw`flex w-2/5 justify-center items-end `} onPress={() => saveFavorite(data)}>
                    <View style={tw`p-2 ${favoriteColor ?? ''} rounded-full`}>
                        <MaterialIcons name="favorite" size={30} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
            {/* Information */}
            <View style={tw`flex flex-row w-full p-1 justify-around mt-5`}>
                <View style={[tw`w-28 py-5 px-2`, styles.border]}>
                    <View style={tw`flex flex-col`}>
                        <Text style={tw`text-sm font-semibold text-center`}>Rating</Text>
                        <Text style={tw`text-sm font-semibold text-center`}>{data.attributes.averageRating}</Text>
                    </View>
                </View>
                <View style={[tw`w-28 py-5 px-2`, styles.border]}>
                    <View style={tw`flex flex-col`}>
                        <Text style={tw`text-sm font-semibold text-center`}>Chapters</Text>
                        {/* {
                            data.type == 'anime' ? <Text style={tw`text-sm font-semibold text-center`}>{data.attributes.episodeCount}</Text> : <Text style={tw`text-sm font-semibold text-center`}>{data.attributes.chapterCount}</Text>
                        } */}
                        <Text style={tw`text-sm font-semibold text-center`}>{data.attributes.episodeCount}</Text>
                    </View>
                </View>
                <View style={[tw`w-28 py-5 px-2`, styles.border]}>
                    <View style={tw`flex flex-col`}>
                        <Text style={tw`text-sm font-semibold text-center`}>Rating rank</Text>
                        <Text style={tw`text-sm font-semibold text-center`}>{data.attributes.ratingRank}</Text>
                    </View>
                </View>
            </View>
            {/* Synopsis */}
            <View style={tw`w-11/12 mx-4 mt-5`}>
                <Text style={tw`text-lg mb-1 font-semibold`}>Synopsis</Text>
                <Text style={tw`text-sm font-semibold text-gray-500 text-justify`}>{data.attributes.synopsis}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    border: {
        borderColor: '#6c757d',
        borderWidth: 0.25,
        borderRadius: 5
    }
})


