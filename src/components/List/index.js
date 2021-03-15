import { Thumbnail } from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

// const profileImage = require("../../assets/images/profile.png")

const List = ({
    avatar = false,
    rignIcon = false,
    avatarImage = "",

}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            {avatar && <View>
                {typeof avatarImage == "string" ? <View style={styles.avatarTitleContainer}>

                </View> : <Thumbnail source={avatarImage} />}
            </View>}
        </TouchableOpacity>
    )
}

export default List


const styles = StyleSheet.create({
    avatarTitleContainer: {
        backgroundColor: "#FFBE00",
        height: 50,
        width: 50,
        borderRadius: 100
    }
})