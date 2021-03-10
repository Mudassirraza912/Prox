import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

export const Map = ({
    containerStyle = {},
    mapStyle = {},
    coords = null
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={[styles.map, mapStyle]}
            region={coords 
                ? 
                coords : 
                {
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      height: "100%",
      width: "100%",
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});