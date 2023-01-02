import { AntDesign } from '@expo/vector-icons';
import { DatumAnime, DatumEpisodes, DatumManga } from '../interfaces';
import { DatumChaptersManga } from '../interfaces/chaptersManga.interface';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react'
import tw from 'twrnc';

type Props = {
  data: DatumAnime | DatumManga
  episodes: DatumChaptersManga | DatumEpisodes
}


export const Chapters = ({ data, episodes }: Props) => {

  let uri = data.attributes.posterImage.original

  if (data.type === 'anime') {
    if (episodes.attributes.thumbnail?.original != null) {
      uri = episodes.attributes.thumbnail?.original
    }
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={{ uri: uri }} style={styles.image} borderRadius={10}>
        <View style={tw`flex-0.9 justify-end items-end`}>
          <View style={tw`mt-2 w-2/5 bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300`}>

            {
              data.type === 'anime' ?
                <Text style={tw`text-center`}> <AntDesign name="clockcircle" size={15} color="black" /> {episodes.attributes?.length} min</Text>
                :
                <Text style={tw`break-all text-center`}> {episodes.attributes?.length} volumes</Text>
            }

          </View>
        </View>
      </ImageBackground>
      <Text numberOfLines={2} style={tw`text-center text-sm font-semibold `}>{episodes.attributes?.canonicalTitle}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '95%',
    resizeMode: 'cover',
  },
  container: {
    minWidth: 250,
    maxHeight: 300,
    marginVertical: 1,
    marginHorizontal: 5,
    paddingBottom: 10,

  }
})