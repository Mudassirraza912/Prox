import React, { useState, createRef, useEffect } from 'react'
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
import { SearchFilter } from '../../components/SearchFilter/index'
import { ItemDetail } from '../../components/ItemDetails/ItemDetail'
import { getAllMerchant } from '../../stores/actions/resturantAction'
const Home = ({ navigation, user, resturants, getAllMerchant }) => {

  const FilterRef = createRef()
  const itemRef = createRef()
  useEffect(() => {
    getAllMerchant()
  }, [])

  console.log("resturants", resturants)
  const [showFilter, setShowFilter] = useState(false)

  return (
    <View style={styles.mainContainer}>
      <SearchFilter ref={FilterRef} />
      <ItemDetail ref={itemRef} />
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
                  <PopularResturantsCard onPress={() => navigation.navigate("ViewResturant")} />
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
                  <HorizontalCards onPress={() => {navigation.navigate("ResturantMenu")}}/>
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
    user: state.userReducer.user,
    resturants: state.resturant.resturants
  }
}

const mapDispatchToProps = {
  getAllMerchant
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
