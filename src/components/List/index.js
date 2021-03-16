import { Thumbnail } from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { fontStyles } from '../../constants/fontStyles'

// const profileImage = require("../../assets/images/profile.png")

import Ionicons from 'react-native-vector-icons/Ionicons'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'

const List = ({
    avatar = false,
    leftIcon = false,
    leftIconName = "",
    leftIconColor = DEFAULT_THEME_COLOR,
    lefIconSize = 20,
    rightIcon = true,   
    avatarText = "",
    avatarImage = "",
    title = "",
    subtitle = "",
    rightIconName = "chevron-forward",
    titleStyle = {},
    subTitleStyle = {},
    containerStyle = {},
    onPress = () => { }
}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.mainContainer, containerStyle]}>
            {avatar && <View>
                {typeof avatarImage == "string" ? <View style={styles.avatarTitleContainer}>
                    <Text style={[fontStyles.ProximaBoldH1, styles.avatarText]}>{avatarText}</Text>
                </View> : <Thumbnail source={avatarImage} />}
            </View>}
            {leftIcon && <View>
                <Ionicons name={leftIconName} size={lefIconSize} color={leftIconColor} />
            </View>}

            <View style={styles.centerComponentContainer}>
                <Text style={[fontStyles.ProximaSemiBold, styles.nameText, titleStyle]}>{title}</Text>
                {subtitle ? <Text style={[fontStyles.ProximaRegularP2, styles.subtitleText, subTitleStyle]}>{subtitle}</Text> : null}
            </View>


            {rightIcon && <View style={{ position: "absolute", right: 15 }} >
                <Ionicons name={rightIconName} size={25} color={"#D3D8DF"} />

            </View>}

        </TouchableOpacity>
    )
}

export default List


const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10
    },
    avatarTitleContainer: {
        backgroundColor: "#FFBE00",
        height: 60,
        width: 60,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    avatarText: {
        color: "#fff"
    },
    centerComponentContainer: {
        marginStart: 10
    },
    nameText: {
        color: "#6905DB"
    },
    subtitleText: {
        color: "#6A7C92"
    }
})