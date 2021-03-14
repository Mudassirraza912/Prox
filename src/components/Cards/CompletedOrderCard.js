import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import Button from '../Button'
import { HorizontalCards } from '../Cards/HorizontalCards'
export const CompletedOrderCard = () => {

    return(
        <View>
            <View style={styles.blockContainer}>
                <HorizontalCards />
            </View>
            <View style={[styles.itemContainer, styles.rowSpaceBtw, {width: '95'}]}>
                <Button title="Re Order" containerStyle={{width: '45%'}} />
                <Button title="Rating" containerStyle={{width: '45%'}} lightTheme />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 10
      },
    itemContainer: {
        paddingVertical: 5,
      },
    rowSpaceBtw : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})