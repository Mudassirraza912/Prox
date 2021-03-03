import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DEFAULT_THEME_COLOR, DISABLE_BUTTON_COLOR, LIGHT_BUTTON_COLOR, DISABLE_BUTTON_TEXT_COLOR } from '../../constants/colors'

const Button = ({
    title = "BUTTON TITLE",
    containerStyle = {},
    titleStyle = {},
    lightTheme = false,
    disabled = false,
    backgroundColor = DEFAULT_THEME_COLOR,
    onPress = () => { },
    textColor="#fff"
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={.6}
            style={[
                styles.container,
                { 
                    backgroundColor: disabled ? DISABLE_BUTTON_COLOR : (lightTheme ? LIGHT_BUTTON_COLOR : backgroundColor) 
                },
                containerStyle
            ]}
            onPress={onPress}
        >
            <Text style={[styles.title, { color: disabled ? DISABLE_BUTTON_TEXT_COLOR : (lightTheme ? DISABLE_BUTTON_TEXT_COLOR : textColor) }, titleStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 60,
        alignSelf: 'center',
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
    }
})
