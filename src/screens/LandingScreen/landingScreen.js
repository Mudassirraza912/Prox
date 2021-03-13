import React from 'react'
import { useState } from 'react'
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native'
import Button from '../../components/Button'
import CustomModal from '../../components/Modal'
import { ParallaxDemo } from '../../components/PrallaxTabs/PrallaxTab'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
import { fontStyles } from '../../constants/fontStyles'

const Splash = require('../../assets/images/Splash.png')
const LandingScreen = ({navigation}) => {

 
    
    return(
        <View style={{ flex: 1 }}>
            {/* <ImageBackground source={Splash} style={styles.backgroundImage}>
                <View style={styles.mainContainer}>
                    <Text style={[fontStyles.ProximaBoldH1, {color: "#fff"}]}>
                        POPPINS
                    </Text>

                    <View style={styles.bottomItems}>
                        <Button
                            onPress={() => navigation.navigate("SignUp")}
                            title={"Create Account"}
                            titleStyle={[fontStyles.ProximaSemiBold, {color: "#000"}]}
                            backgroundColor={"#F6BD3E"}
                            />
                            <Button
                            onPress={() => navigation.navigate("SignIn")}
                            title={"Have an account? Sign in"}
                            titleStyle={[fontStyles.ProximaSemiBold]}
                            />
                    </View>
                </View>
            </ImageBackground> */}
            <ParallaxDemo />
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%', 
        width: '100%'
    },
    mainContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    bottomItems: {
        position:'absolute',
        bottom: 50,
        width:'100%'
    }
})

export default LandingScreen;