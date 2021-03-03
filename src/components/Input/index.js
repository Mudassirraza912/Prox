import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import IntlPhoneInput from 'react-native-intl-phone-input';
import { fontStyles } from "../../constants/fontStyles";

const eye = require('../../assets/images/eye.png')

const Input = ({
    isFlag = false,
    flagStyle = {},
    containerStyle = {},
    onChangeText = () => {},
    type = "basicInput" | "phoneInput",
    label = "Label here",
    labelStyle = {},
    isPassword = false, 
    keyboardType = 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad'
}) => {

    // console.log("keyboardType", keyboardType)

    const [isShow, setIsShow] = useState(true)
    const phoneIpnput = () => {
        return( 
            <View>
                <Text style={[styles.defaulLableStyle, label, fontStyles.ProximaRegularP2]}>{label}</Text>
                <IntlPhoneInput 
                flagStyle={[flagStyle , isFlag ? {} : styles.dafaulFlagStyle ]}
                containerStyle={{...styles.defaulContainerStyle, ...containerStyle}}
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
                <View style={{...styles.defaulContainerStyle, ...containerStyle}}>
                    <TextInput keyboardType={keyboardType} secureTextEntry={isPassword && isShow} style={{width: isPassword ? "90%" : "100%"}} onChangeText={onChangeText} />
                   {isPassword && 
                   <TouchableOpacity 
                   onPress={() => setIsShow(!isShow)}
                   style={{width: "10%", paddingHorizontal: 10}} activeOpacity={.6} >
                        <Image source={eye} />
                    </TouchableOpacity>}
                </View>
            </View>
            )
    }

        
    if(type == "phoneInput"){
        return phoneIpnput()
    }else { 
        return basicInput()
    }
}

const styles = StyleSheet.create({
    dafaulFlagStyle: {
        display: "none"
    },
    defaulContainerStyle: {
        backgroundColor: "#F1F2FA",
        padding: 20,
        alignSelf:'center',
        width: '100%',
        borderRadius: 10,
        flexDirection:'row'
    },
    defaulLableStyle: {
        paddingVertical: 5,
    }
})

export default Input;