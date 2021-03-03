import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
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

            <View style={styles.blockContainer}>
                <Input label="Mobile Number"/>
            </View>
            <View style={styles.blockContainer}>
                <Input label="Password" isPassword/>
            </View>

            <View style={styles.blockContainer}>
                <Button title="Forgot Password?" titleStyle={[fontStyles.ProximaRegularP2, {color:'#000'}]} backgroundColor="transparent" />
            </View>

            <View style={styles.blockContainer}>
                <Button title="Sign in" titleStyle={fontStyles.ProximaSemiBold} />
            </View>

            <View style={styles.signUpText}>
                <Text style={fontStyles.ProximaRegularP1}>Don't have an account?</Text> 
                <Text style={[fontStyles.ProximaRegularP1, {color: DEFAULT_THEME_COLOR}]}>Sign up</Text>
            </View>

            <View style={styles.blockContainer}>
                <Button
                    onPress={() => {}}
                    title={"Connect with Facebook"}
                    titleStyle={[fontStyles.ProximaSemiBold, {color: "#000"}]}
                    backgroundColor={"#F6BD3E"}
                    />
            </View>
            <View style={styles.blockContainer}>
                    <Button
                    onPress={() => navigation.navigate("SignIn")}
                    title={"Connect with Facebook"}
                    titleStyle={[fontStyles.ProximaSemiBold]}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor: '#fff',
        flex: 1,
        top: Platform.OS == "android" ? 20 : 50
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
export default SignIn;