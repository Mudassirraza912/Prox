import React from 'react'
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native'
import Button from '../../components/Button'
import { fontStyles } from '../../constants/fontStyles'

const Splash = require('../../assets/images/Splash.png')
const LandingScreen = ({navigation}) => {
    
    return(
        <View>
            <ImageBackground source={Splash} style={styles.backgroundImage}>
                <View style={styles.mainContainer}>
                    <Text style={[fontStyles.ProximaBoldH1, {color: "#fff"}]}>
                        Prox
                    </Text>

                    <View style={styles.bottomItems}>
                        <Button
                            onPress={() => {}}
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
            </ImageBackground>
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