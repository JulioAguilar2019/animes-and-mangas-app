import { AntDesign } from '@expo/vector-icons';
import { DatumAnime } from '../interfaces/anime.interface';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { View, TextInput, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react'
import tw from 'twrnc';

type Props = {
    animeData: DatumAnime,
    isLoading: boolean,
}

const Header = ({ animeData, isLoading }: Props) => {
    let img = 'https://media.kitsu.io/anime/43806/cover_image/53dc31b555892f77c6fe48720ecd4e38.jpg'

    if (!isLoading) {
        img = animeData?.attributes?.coverImage?.original
    }

    const [search, setSearch] = useState<string>('')

    const onSearchSubmit = () => {
        navigate('SearchScreen', { search: search })
    }

    const { navigate } = useNavigation()

    function navigationToDetails() {
        navigate('DetailsScreen', animeData)
    }

    return (
        <ImageBackground style={tw`w-full`} source={{ uri: `${img}` }}>
            <View style={tw`bg-black/25`}>
                <View style={tw`p-0 flex flex-row items-center bg-gray-50/40 border border-gray-300/20 rounded-lg mb-5 mx-3 mt-2 shadow-md`}>
                    <AntDesign name="search1" size={24} color="white" style={tw`flex-none mx-3`} />
                    <TextInput onChangeText={(text: string) => { setSearch(text) }} onSubmitEditing={onSearchSubmit} style={tw`text-white flex-auto p-3 pl-0`} numberOfLines={1} multiline={false} clearButtonMode="always" placeholderTextColor="white" placeholder='Buscar...' />
                </View>

                <View style={tw`mx-10 mt-3 mb-5 `}>
                    <Text style={tw`text-4xl uppercase text-center font-bold text-slate-100`}>What are you looking for?</Text>
                    <Text style={tw`text-base capitalize text-center mt-2 text-slate-200`}>find your favorite animes and manga</Text>
                </View>

                <TouchableOpacity
                    onPress={navigationToDetails}
                    activeOpacity={0.8}
                    style={tw`py-2 px-5 ml-3 my-3 bg-red-500 rounded-full w-30 flex flex-row justify-between`}>
                    <Text style={tw`text-white font-bold mr-3`}>See more</Text>
                    <AntDesign name="play" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Header