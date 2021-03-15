import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import List from '../../components/List'
import { fontStyles } from '../../constants/fontStyles'

const Settings = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.blockContainer}>
                    <Text style={fontStyles.ProximaBoldH1}>
                        Settings
                    </Text>
                </View>
                <View>
                    <List avatar />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS == "ios" ? 40 : 0
    },
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 10
    },
})
