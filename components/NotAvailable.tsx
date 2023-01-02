import { View, Text } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import notAvaiable from '../assets/images/notavailable.json'
import React from 'react'
import tw from 'twrnc';



export const NotAvailable = () => {
    return (
        <View >
            <AnimatedLottieView style={{ width: 400 }} autoPlay source={notAvaiable} loop />
            <Text style={tw`text-center text-xl pb-5 font-semibold`}>Not available yet</Text>
        </View>
    )
}

