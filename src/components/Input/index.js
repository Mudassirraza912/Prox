import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import IntlPhoneInput from 'react-native-intl-phone-input';
import { fontStyles } from "../../constants/fontStyles";
import Ionicons from 'react-native-vector-icons/Ionicons'

const eye = require('../../assets/images/eye.png')

const Input = ({
    isFlag = false,
    flagStyle = {},
    containerStyle = {},
    onChangeText = () => { },
    type = "basicInput" | "phoneInput",
    label = "Label here",
    labelStyle = {},
    isPassword = false,
    keyboardType = 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad',
    placeholder = "",
    rightComponent = false,
    renderRightComponent = () => { }
}) => {

    // console.log("keyboardType", keyboardType)

    const [isShow, setIsShow] = useState(true)
    const phoneIpnput = () => {
        return (
            <View>
                <Text style={[styles.defaulLableStyle, label, fontStyles.ProximaRegularP2]}>{label}</Text>
                <IntlPhoneInput
                    flagStyle={[flagStyle, isFlag ? {} : styles.dafaulFlagStyle]}
                    containerStyle={{ ...styles.defaulContainerStyle, ...containerStyle }}
                    onChangeText={onChangeText}
                    defaultCountry="US"
                />
            </View>
        )
    }

    const basicInput = () => {
        return (
            <View>
                <Text style={[styles.defaulLableStyle, label, fontStyles.ProximaRegularP2]}>{label}</Text>
                <View style={{ ...styles.defaulContainerStyle, ...containerStyle }}>
                    <TextInput placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={isPassword && isShow} style={{ width: (isPassword || rightComponent) ? "90%" : "100%" }} onChangeText={onChangeText} />
                    {isPassword &&
                        <TouchableOpacity
                            onPress={() => setIsShow(!isShow)}
                            style={{ width: "20%", paddingHorizontal: 10 }} activeOpacity={.6} >
                            {/* <Image source={eye} /> */}
                            <Ionicons style={{ top: Platform.OS == "ios" ? 0 : 10 }} name={isPassword && isShow ? "eye-off-outline" : "eye-outline"} size={25} />
                        </TouchableOpacity>}


                    {rightComponent && renderRightComponent()}
                </View>

            </View>
        )
    }


    if (type == "phoneInput") {
        return phoneIpnput()
    } else {
        return basicInput()
    }
}

const styles = StyleSheet.create({
    dafaulFlagStyle: {
        display: "none"
    },
    defaulContainerStyle: {
        backgroundColor: "#F1F2FA",
        padding: Platform.OS == "ios" ? 20 : 5,
        alignSelf: 'center',
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row'
    },
    defaulLableStyle: {
        paddingVertical: 5,
    }
})

export default Input;