import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Platform, ScrollView, Image } from 'react-native'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { Map } from '../../components/Map/map'

import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomModal from '../../components/Modal'
import { useState } from 'react'
import { Body, Left, ListItem, Right, Thumbnail, Text as NativeBaseText } from 'native-base'
import { fontStyles } from '../../constants/fontStyles'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
import RadioButtonRN from 'radio-buttons-react-native';
import PaymentRadio from '../../components/SelectPaymentRadio'
import Input from '../../components/Input'

const mapImage = require("../../assets/images/maps.png")
const creditCardImage = require("../../assets/images/credit-card.png")
const payPalImage = require("../../assets/images/paypal.png")

const percentImage = require("../../assets/images/percent.png")

const Checkout = ({ navigation }) => {
    const [selected, setselected] = useState(0)

    return (
        <View style={styles.mainContainer}>
            <Header
                centerText={"Checkout"}
                leftButtonPress={() => navigation.goBack()}
            containerStyle={{ marginTop: 20 }}
            />
            {/* <SafeAreaView> */}
                <ScrollView >
                    <View style={styles.mainContainer}>
                        <ListItem itemDivider={false} avatar style={styles.resturantDetailsContainer}>
                            <Left style={styles.rdLeftContainer}>
                                <Thumbnail style={{ height: 20, width: 15 }} source={mapImage} />
                            </Left>
                            <Body style={styles.rdBody}>
                                <Text style={[fontStyles.ProximaSemiBold]}>McDonald's</Text>
                                <Text style={[fontStyles.ProximaRegularP2, styles.addressText]} >102  Trouser Leg Road, Springfield</Text>
                            </Body>
                        </ListItem>

                        <View style={styles.cartDetails}>
                            <View>
                                <Text style={[fontStyles.ProximaSemiBoldSmall]}>1 pc Chicken Mcdo w/ Rice</Text>
                                <TouchableOpacity style={{ marginTop: 15 }}>
                                    <Text style={[fontStyles.ProximaSemiBoldSmall, styles.edit]}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={fontStyles.ProximaRegularP2}>$5.00</Text>
                        </View>

                        <View style={styles.paymentContainer}>
                            <PaymentRadio
                                title={"Credit / Debit Card (1345)"}
                                leftImage={creditCardImage}
                                selected={selected == 0}
                                onPress={() => setselected(0)}
                            />
                            <PaymentRadio
                                title={"Paypal"}
                                selected={selected == 1}
                                leftImage={payPalImage}
                                containerStyle={{ marginTop: 10 }}
                                imageStyle={{ width: 25, marginStart: 5 }}
                                onPress={() => setselected(1)}
                            />

                            <Text style={[fontStyles.ProximaSemiBoldSmall, styles.addCouponText]}>Add Coupon</Text>

                            <View style={{ width: "90%", flexDirection: 'row', alignSelf: "center", alignItems: "center", borderRadius: 10, overflow: "hidden" }}>
                                <View style={{ width: "80%" }}>
                                    <Input
                                        containerStyle={{ width: "100%", borderRadius: 0, borderTopLeftRadius: 10 }}
                                        label={""}
                                        placeholder="Coupon Code"
                                        keyboardType="default" />
                                </View>
                                <View style={{ width: "20%", backgroundColor: "#FFBE00", alignItems: "center", justifyContent: "center", paddingVertical: 13, marginTop: 25, borderTopRightRadius: 10 }} >
                                    <Image source={percentImage} style={{ height: 30, width: 30 }} />
                                </View>
                            </View>
                        </View>


                        <View style={styles.orderDetails}>
                            <View style={styles.orderDetailsSubContainer}>
                                <Text style={fontStyles.ProximaRegularP2}>Subtotal</Text>
                                <Text style={fontStyles.ProximaRegularP2}>$5.00</Text>
                            </View>
                            <View style={styles.orderDetailsSubContainer}>
                                <Text style={fontStyles.ProximaRegularP2}>Fees & Taxes</Text>
                                <Text style={fontStyles.ProximaRegularP2}>$1.00</Text>
                            </View>
                            <View style={styles.orderDetailsSubContainer}>
                                <Text style={fontStyles.ProximaSemiBold}>Total</Text>
                                <Text style={fontStyles.ProximaSemiBold}>$6.00</Text>
                            </View>

                            <Button
                              title="Place Order"
                              containerStyle={{ marginTop: 20 }}
                            />

                        </View>

                    </View>
                </ScrollView>
            {/* </SafeAreaView> */}
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
        // paddingStart: 10,
    },
    rdLeftContainer: {
        width: '6%',
        height: '80%',
        alignItems: "center",
        justifyContent: "center",
        paddingStart: 10
    },
    addressText: {
        fontSize: 12,
        color: "#6A7C92",
        marginTop: 10
    },
    rdBody: {
        // paddingVertical: 15,
    },
    cartDetails: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    edit: {
        color: DEFAULT_THEME_COLOR
    },
    paymentContainer: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        marginTop: 5
    },
    addCouponText: {
        marginStart: 20,
        marginTop: 20
    },
    orderDetails: {
        backgroundColor: "#fff",
        marginTop: 5,
        paddingVertical: 15,
        paddingBottom: 30
    },
    orderDetailsSubContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: "90%",
        justifyContent: "space-between",
        paddingVertical: 15
    }
})

export default Checkout;