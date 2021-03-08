import React from 'react'
import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import { Map } from '../../components/Map/map'
const Selectlocation = () => {

    return(
        <View>
            <SafeAreaView>
                <Map />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        flex: 1,
      },
})

export default Selectlocation;