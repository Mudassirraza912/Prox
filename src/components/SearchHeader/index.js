import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchHeader = ({
    Component = View,
    backButton = false,
    containerStyle = {},
    backContainerStyle = {},
    inputContainerStyle = {},
    onBackButtonPress = () => { },
    onSearchContainerPress = () => { },
    onRightIconPress = () => {},
    inputRightIcon = true,
    inputRightIconName = "options",
    inputLeftIcon = true,
    inputLeftIconName = "search",
    placeholder = "",
    editable = true
}) => {
    return (
        <View
            style={[
                styles.mainContainer,
                backButton ? {
                    flexDirection: "row",
                    alignItems: 'center',
                } : {},
                containerStyle
            ]}>
            {backButton && <TouchableOpacity
                onPress={onBackButtonPress}
                style={[styles.backContainer, backContainerStyle]}>
                <Ionicons name="arrow-back" color={"##222533"} size={25} />
            </TouchableOpacity>}
            <Component
                activeOpacity={0.6}
                onPress={onSearchContainerPress}
                style={[styles.inputContainer, backButton ? {} : { alignSelf: "center", width: "90%" }, inputContainerStyle]}>
                {inputLeftIcon && <Ionicons
                    size={20}
                    name={inputLeftIconName}
                    color={"#6A7C92"}
                    style={{ marginStart: 10, width: "10%" }} />}
                <TextInput
                    placeholder={placeholder}
                    editable={editable}
                    style={{ marginStart: 5, width: "70%" }} />
                {inputRightIcon && 
                    <Ionicons
                    onPress={onRightIconPress}
                    size={20}
                    name={inputRightIconName}
                    color={"#6A7C92"}
                    style={{ textAlign: "right", marginEnd: 20, width: "10%" }} />}
            </Component>
        </View>
    )
}

export default SearchHeader

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        marginTop: 10
    },
    backContainer: {
        width: "15%",
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        backgroundColor: "#F1F2FA",
        width: "80%",
        // paddingVertical: 10,
        borderRadius: 100,
        flexDirection: "row",
        alignItems: "center"
    }
})
