import { DatumAnime, DatumManga } from '../interfaces';
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import tw from 'twrnc';

type Props = {
    data: DatumAnime | DatumManga
    isLoading: boolean
}

export const Card = ({ data, isLoading }: Props) => {


    const { navigate } = useNavigation()

    function navigationToDetails() {
        navigate('DetailsScreen', data)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={tw`shadow-md`}
                onPress={navigationToDetails}
                activeOpacity={0.8}
            >
                <Image source={{ uri: data.attributes.posterImage.original }} style={styles.image} borderRadius={10}></Image>
                <Text style={tw`capitalize text-center font-semibold mt-2`}>{data.attributes.canonicalTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        maxWidth: 190,
        height: '90%',
        resizeMode: 'cover',
    },
    container: {
        minWidth: 180,
        maxHeight: 200,
        marginVertical: 15,
        marginHorizontal: 5,
    }
})