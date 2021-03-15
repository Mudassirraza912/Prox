import React, { useState } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { CompletedOrderCard } from '../../components/Cards/CompletedOrderCard'
import { PendingOrderCard } from '../../components/Cards/PendingOrderCard'
import Header from '../../components/Header/index'
import { OrderToggle } from '../../components/Toggle/OrderToggle'


export const Order = ({navigation}) => {
    const [selected, setSeleted] = useState('pending')
    return(
        <View style={{backgroundColor: '#fff'}}>
            <Header centerText="Orders" leftIcon leftIconName="arrow-back-outline" leftButtonPress={() => navigation.goBack()}/>
            <OrderToggle onChange={(active) => setSeleted(active)}  />
            <ScrollView>
                {selected == "pending" ? 
                    <>
                        {[1,2,3,4,5].map((val, ind) => {
                            return  <View key={ind} style={[styles.blockContainer, {top: 10}]}>
                                        <PendingOrderCard /> 
                                    </View>
                        })}
                    </>
                    :
                    <>
                    {[1,2,3,4,5].map((val, ind) => {
                        return  <View key={ind} style={[styles.blockContainer, {marginVertical: 10}]}>
                                    <CompletedOrderCard /> 
                                </View>
                    })}
                </>
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
      },
    itemContainer: {
        paddingVertical: 5,
      },
})