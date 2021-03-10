import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal'

const { width, height } = Dimensions.get("screen")

const SearchFilter = () => {
    return (
        <View style={styles.container}>

            <Modal
                isVisible={true}
                swipeDirection="down"
                coverScreen
                deviceWidth={width}
                deviceHeight={height}
            >
                <View style={{ backgroundColor: "#fff", height: 500, width: width, position: "absolute", bottom: 0 }}>

                </View>

            </Modal>
        </View>
    )
}

export default SearchFilter

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
