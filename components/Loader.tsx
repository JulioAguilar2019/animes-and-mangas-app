import { View, Text } from 'react-native'
import React from 'react'
import pochita from '../assets/images/pochita.json'
import AnimatedLottieView from 'lottie-react-native'
import tw from 'twrnc';

export const Loader = () => {
    return (
        <View >
            <AnimatedLottieView style={{ width: 400 }} autoPlay source={pochita} loop />
            <Text style={tw`text-2xl text-center`}>Cargando...</Text>
        </View>
    )
}

