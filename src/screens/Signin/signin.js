import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { fontStyles } from '../../constants/fontStyles'

const SignIn = () => {


    return(
        <View style={styles.mainContainer}>
            <View style={styles.blockContainer}>
                <View style={styles.itemContainer}>
                    <Text style={fontStyles.ProximaBoldH1}>Welcome back </Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={[fontStyles.ProximaRegularP2, {color: "#6A7C92"}]}>Sign in to your account</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        top: Platform.OS == "android" ? 20 : 50
    },
    blockContainer: {
        padding: 15
    },
    itemContainer: {
        paddingVertical: 5
    }
})
export default SignIn;