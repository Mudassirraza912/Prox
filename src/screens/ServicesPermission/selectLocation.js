import React from 'react'
import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import { Map } from '../../components/Map/map'
const Selectlocation = () => {

    return(
        <View>
            <SafeAreaView>
                <Map />
                {/* <View style={StyleSheet.absoluteFillObject}>
                    // <MapView style={StyleSheet.absoluteFillObject} />
                    
                    <View style={{ position: 'absolute', top: 50, left: 0, right: 0, height: 50, borderWidth: 1  }}>
                    <Text>12312</Text>
                    </View>

                    <View style={{ position: 'absolute', bottom: 50, left: 0, right: 0, height: 50, borderWidth: 1 }}>
                    <Text>12312</Text>
                    </View>
                </View> */}
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