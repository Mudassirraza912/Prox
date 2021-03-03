import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
import { fontStyles } from '../../constants/fontStyles'

const ChangePassword = ({navigation}) => {


    return(
        <View style={styles.mainContainer}>
            <View style={styles.blockContainer}>
                <View style={styles.itemContainer}>
                    <Text style={fontStyles.ProximaBoldH1}>Choose a New Password</Text>
                </View>
            </View>

            <View style={[styles.blockContainer, {marginTop: 30}]}>
                <Input label="New Password" isPassword/>
            </View>
            <View style={[styles.blockContainer]}>
                <Input label="Confirm Password" isPassword/>
            </View>

            <View style={[styles.blockContainer, { marginTop: 30}]}>
                <Button onPress={() => {
                    navigation.navigate("VerificationOTP")
                }} title="Continue" titleStyle={fontStyles.ProximaSemiBold} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: Platform.OS == "android" ? 0 : 50
    },
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    itemContainer: {
        paddingVertical: 5,
    },
    signUpText: { 
        flexDirection:'row', 
        alignSelf:'center', 
        paddingVertical: 25
    },
    bottomItems: {
        position:'absolute',
        bottom: 100,
        width:'100%'
    }

})
export default ChangePassword;