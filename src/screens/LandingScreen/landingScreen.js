import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'

const Splash = require('../../assets/images/Splash.png')
const LandingScreen = () => {
    
    return(
        <View>
            <ImageBackground source={Splash} style={{height: '100%', width: '100%'}}>
                
            </ImageBackground>
        </View>
    )
}

export default LandingScreen;