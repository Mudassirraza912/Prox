import React, { createRef, forwardRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import ActionSheet from "react-native-actions-sheet";
import { fontStyles } from "../../constants/fontStyles";
import { ItemCard } from "../Cards/ItemCard";
import { NumericInput } from '../NumericInput/index'
import Input from "../Input";
import Button from '../Button/index'
import { FlavouredList } from "../FlavourList";

export const ItemDetail = forwardRef(({
    onClose = () => ref.current?.setModalVisible(),
    goTo = () => { },
    closeModal = () => {}
}, ref) => {


    return (
        <ActionSheet containerStyle={styles.mainContainer} ref={ref}>

            <View style={[styles.container]}>
                <View style={[styles.blockContainer]}>
                    <ItemCard />
                </View>
                <View style={[styles.blockContainer, { marginVertical: 15 }]}>
                    <View style={styles.itemContainer}>
                        <Text style={[fontStyles.ProximaRegularP2]}>Select Flavor</Text>
                    </View>
                    <FlavouredList />
                    <FlavouredList />

                </View>
                <View style={[styles.blockContainer, styles.row, { marginVertical: 15 }]}>
                    <Text style={[fontStyles.ProximaRegularP2]}>Quantity</Text>
                    <NumericInput
                        containerStyle={{ left: 20 }}
                        inputContainerStyle={{ marginHorizontal: 4, borderRadius: 5 }}
                        showBtn={false}
                        size={80}
                    />
                </View>
                <View style={[styles.blockContainer]}>
                    <View style={styles.row}>
                        <Text style={fontStyles.ProximaRegularP2}>Special Instruction</Text>
                        <Text style={[fontStyles.ProximaRegularP2, { color: '#6A7C92' }]}> Optional</Text>
                    </View>
                    <Input containerStyle={{ top: -20 }} label={""} placeholder="Add any special instructions" keyboardType="default" />
                </View>
            </View>

            <View style={[styles.itemContainer, { marginBottom: 10 }]}>
                <Button
                    title={"Add to Cart - $5.00"}
                    onPress={() => {
                        closeModal(false)
                        goTo("Checkout")
                    }}
                />
            </View>
        </ActionSheet>
    )
})

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // width:'99%', 
        // borderRadius: 20
    },
    container: {
        // flex: 1,
        paddingVertical: Platform.OS == "ios" ? 20 : 10,
    },
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    itemContainer: {
        paddingVertical: 5,
    },
    row: {
        flexDirection: 'row',
    },
    closeContainerStyle: {
        bottom: 5,
        backgroundColor: '#6A7C92',
        borderRadius: 20
    }
})