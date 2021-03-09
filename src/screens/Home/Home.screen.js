import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, StyleSheet, ScrollView, Alert
} from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { fontStyles } from '../../constants/fontStyles'
import { FlatList } from 'react-native-gesture-handler'
import { PopularResturantsCard } from '../../components/Cards/PopularResturantCards'
import { HorizontalCards } from '../../components/Cards/HorizontalCards'
import SearchHeader from '../../components/SearchHeader'

const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
      <ScrollView>
        <View>
          <SearchHeader inputContainerStyle={{paddingVertical: 15}} placeholder=" Burger, Pizza, Salad etc..." />
        </View>
        <View style={styles.blockContainer}>
          <Text style={fontStyles.ProximaSemiBold}>
            Popular Near You
          </Text>
        </View>
        <View style={[styles.blockContainer, {}]}>
          <FlatList
              horizontal={true}
              data={[1,2,3,4,5]}
              renderItem={({item, index}) => {
                return <View style={{marginHorizontal: 10}}>
                            <PopularResturantsCard />
                        </View>
              }}
              showsHorizontalScrollIndicator={false}
            />
        </View>
        <View style={{backgroundColor:'#F1F2FA', width: '100%', height: 5, marginVertical: 5, bottom: 5}} />
        <View style={styles.blockContainer}>
          <Text style={fontStyles.ProximaSemiBold}>
            More Resturants
          </Text>
        </View>
        <View style={[styles.blockContainer, {}]}>
          <FlatList
              data={[1,2,3,4,5]}
              renderItem={({item, index}) => {
                return <View style={{margin: 10}}>
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

const styles =  StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  blockContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15
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
