import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fontStyles } from '../../constants/fontStyles'

const Chips = ({
    data = ["McDonald's", "Pizza", "Burger King", "Chicken wings"],
    onChipPress = (item = String, index = Number) => { },
    containerStyle = {},
    chipStyle = {},
    chipTextStyle = {}
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <FlatList
                data={data}
                // horizontal
                contentContainerStyle={styles.chipsWrapper}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => onChipPress(item, index)} style={[styles.chip, chipStyle]}>
                            <Text style={[styles.chipText, fontStyles.ProximaRegularP2, chipTextStyle]}>{item}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Chips

const styles = StyleSheet.create({
    container: {
        width: "95%", 
        alignSelf: "center"
    },
    chipsWrapper: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    chip: {
        backgroundColor: "#F1F2FA",
        margin: 5,
        // padding: 10,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 50,
    },
    chipText: {

    }
})
