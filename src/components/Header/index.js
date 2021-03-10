import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({
    centerText = "",
    backIcon = true,
    backIconName = "",
    backButtonPress = () => { }
}) => {
    return (
        <View style={styles.headerContainer}>
            <Text></Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        borderBottomColor: "#E6F0FC"
    }
})
