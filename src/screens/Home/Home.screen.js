import React, { useState, createRef } from 'react'
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
import { SearchFilter } from '../../components/SearchFilter/index'

const Home = ({ navigation, user }) => {

  const FilterRef = createRef()
  const [showFilter, setShowFilter] = useState(false)

  return (
    <View style={styles.mainContainer}>
      <SearchFilter ref={FilterRef} />
      <SafeAreaView> 
        <ScrollView>
          <SearchHeader
            Component={TouchableOpacity}
            placeholder="Burger, Pizza, Salad etc"
            containerStyle={{ marginTop: Platform.OS == "android" ? 15 : 50 }}
            editable={false}
            onSearchContainerPress={() => navigation.navigate("Search")}
            onRightIconPress={() => FilterRef.current?.setModalVisible()}
          />
          <View style={styles.blockContainer}>
            <Text style={fontStyles.ProximaSemiBold}>
              Popular Near You
          </Text>
          </View>
          <View style={[styles.blockContainer, {}]}>
            <FlatList
              horizontal={true}
              data={[1, 2, 3, 4, 5]}
              renderItem={({ item, index }) => {
                return <View style={{ marginHorizontal: 10 }}>
                  <PopularResturantsCard />
                </View>
              }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{ backgroundColor: '#F1F2FA', width: '100%', height: 5, marginVertical: 5, bottom: 5 }} />
          <View style={styles.blockContainer}>
            <Text style={fontStyles.ProximaSemiBold}>
              More Resturants
          </Text>
          </View>
          <View style={[styles.blockContainer, {}]}>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              renderItem={({ item, index }) => {
                return <View style={{ margin: 10 }}>
                  <HorizontalCards />
                </View>
              }}
              showsHorizontalScrollIndicator={false}
            />
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
