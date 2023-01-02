import { DatumAnime, DatumManga } from '../interfaces';
import { DatumCharacters } from '../interfaces/characters.interface';
import { View, Text, Image, StyleSheet, } from 'react-native';
import React from 'react'
import tw from 'twrnc';

type Props = {
    data: DatumAnime | DatumManga
    characters: DatumCharacters
}


export const Characters = ({ data, characters }: Props) => {

    let uri = data.attributes.posterImage.original

    if (characters.attributes.image != null) {
        uri = characters.attributes.image.original
    }


    return (


        <View style={styles.container}>
            <Image source={{ uri: uri }} style={styles.image} borderRadius={10} />
            <Text numberOfLines={2} style={tw`text-center text-sm font-semibold `}>{characters.attributes.canonicalName}</Text>
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