import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Platform, ScrollView } from 'react-native'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { Map } from '../../components/Map/map'

import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomModal from '../../components/Modal'
import { useState } from 'react'
import { Body, Left, ListItem, Right, Thumbnail, Text as NativeBaseText } from 'native-base'
import { fontStyles } from '../../constants/fontStyles'

const mapImage = require("../../assets/images/maps.png")

const Checkout = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <Header
                centerText={"Checkout"}
                leftButtonPress={() => navigation.goBack()}
            />
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <ListItem itemDivider={false} avatar style={styles.resturantDetailsContainer}>
                            <Left style={styles.rdLeftContainer}>
                                <Thumbnail style={{ height: 20, width: 15 }} source={mapImage} />
                            </Left>
                            <Body  style={styles.rdBody}>
                                <Text style={[fontStyles.ProximaSemiBold]}>McDonald's</Text>
                                <Text style={[fontStyles.ProximaRegularP2, styles.addressText]} >102  Trouser Leg Road, Springfield</Text>
                            </Body>
                        </ListItem>

                        <ListItem style={styles.resturantDetailsContainer}>
                            <Body  style={styles.rdBody}>
                                <Text style={[fontStyles.ProximaSemiBoldSmall]}>1 pc Chicken Mcdo w/ Rice</Text>
                                {/* <Text style={[fontStyles.ProximaRegularP2, styles.addressText]} >102  Trouser Leg Road, Springfield</Text> */}
                            </Body>
                            <Right>
                                <Text style={fontStyles.ProximaRegularP2}>$5.00</Text>
                            </Right>
                        </ListItem>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#F1F2FA',
        flex: 1,
    },
    resturantDetailsContainer: {
        // borderBottomColor: ""
        backgroundColor: "#fff",
        width: "100%",
        marginStart: 0,
        paddingStart: 10,
    },
    rdLeftContainer: {
        width: '6%',
        height: '80%',
        alignItems: "center",
        justifyContent: "center"
    },
    addressText: {
        fontSize: 12,
        color: "#6A7C92",
        marginTop: 10
    },
    rdBody: {
        // paddingVertical: 15,
    }
})

export default Checkout;