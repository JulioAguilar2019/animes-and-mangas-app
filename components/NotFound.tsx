import { View } from 'react-native'
import AnimatedLottieView from 'lottie-react-native';
import notFound from '../assets/images/404.json'
import React from 'react'


export const NotFound = () => {
    return (
        <View >
            <AnimatedLottieView style={{ width: 400 }} autoPlay source={notFound} loop />
        </View>
    )
}

