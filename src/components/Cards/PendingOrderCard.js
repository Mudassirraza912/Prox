import React from 'react'
import {View, Text, Image, StyleSheet } from 'react-native'
import { Map } from '../Map/map'
import { NotificationCard } from './NotificationCard'
const mcDonald = require('../../assets/images/mcDonald.png')

export const PendingOrderCard = ({
    title = "McDonalds",
    address = "You are 1 mile out. Your order is in the proximity lane.",
    img = mcDonald,
    price = "5.00"
}) => {

    return(
        <View style={styles.main}>
            <View>
                 <Map mapStyle={[styles.mapStyle, { overflow: 'hidden'}]} containerStyle={[styles.mapStyle, styles.mapContainer]} />
                <NotificationCard 
                img={img} title={title} 
                description={address} 
                time={`$${price}`} 
                divider={false}
                containerStyle={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: '#F1F2FA', borderWidth: 1}}
                descriptionStyle={{width: '85%'}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        // borderBottomRightRadius: 100,
        width: '95%',
        alignSelf:'center'
    },
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 10
      },
    itemContainer: {
        paddingVertical: 5,
      },
    mapStyle: {
          height: 250,
          width: "100%",
      },
    mapContainer: { 
          justifyContent: 'flex-start', 
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow:'hidden',
        },
    divider: {
        borderWidth: 1, 
        borderColor: '#707070',
    }
})