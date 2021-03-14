import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { fontStyles } from '../../constants/fontStyles'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
const item = require('../../assets/images/chicken.png')

export const ItemCard = ({
    containerStyle = {},
    imageUrl = item,
    imageStyle = {},
    ImageContainerStyle = {},
    itemContainerStyle = {},
    title = "1 pc Chicken Mcdo w/ Rice",
    titleStyle = {},
    price = "5.00",
    priceStyle = {},
    onPress = () => { }
}) => {



    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.defaultConatinerStyle, containerStyle]}>
            <View style={[styles.defaultImageContainer, ImageContainerStyle]}>
                <Image source={imageUrl} style={[styles.defaultImageStyle, imageStyle]} />
            </View>
            <View style={[styles.defaultItemContainerStyle, itemContainerStyle]}>
                <Text style={[fontStyles.ProximaSemiBoldSmall, titleStyle]}>{title}</Text>
                <Text style={[fontStyles.ProximaRegularP2, priceStyle, { color: DEFAULT_THEME_COLOR }]}>${price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    defaultConatinerStyle: {
        width: '100%',
        flexDirection: 'row'
    },
    defaultImageContainer: {
        backgroundColor: '#F1F2FA',
        borderRadius: 10,
        padding: 5
    },
    defaultImageStyle: {
        width: 80,
        height: 80
    },
    defaultItemContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 10
    },
})

