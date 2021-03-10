import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, StyleSheet, ScrollView, Alert, Platform
} from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { fontStyles } from '../../constants/fontStyles'
import { FlatList } from 'react-native-gesture-handler'
import { PopularResturantsCard } from '../../components/Cards/PopularResturantCards'
import { HorizontalCards } from '../../components/Cards/HorizontalCards'
import SearchHeader from '../../components/SearchHeader'
import { NumericInput } from '../../components/NumericInput'
import Chips from '../../components/Chips'

const Home = ({ navigation, user }) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView>
                <ScrollView>
                    <SearchHeader
                        Component={TouchableOpacity}
                        placeholder="Burger, Pizza, Salad etc"
                        containerStyle={{ marginTop: Platform.OS == "android" ? 15 : 50 }}
                        editable={false}
                    />
                    <View style={styles.blockContainer}>
                        <Text style={fontStyles.ProximaSemiBold}>
                            Popular Near You
                        </Text>
                    </View>



                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        flex: 1,
    },
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 10
    },
    itemContainer: {
        paddingVertical: 5,
    },
})

const mapStateToProps = state => {
    return {
        user: state.userReducer.users
    }
}

export default connect(mapStateToProps, null)(Home)
