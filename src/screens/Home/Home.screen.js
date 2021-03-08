import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'
import Button from '../../components/Button'
import { DISABLE_BUTTON_TEXT_COLOR } from '../../constants/colors'
import SearchHeader from '../../components/SearchHeader'

const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()

  function ListUser() {
    return user.map(data => {
      return (
        <View
          key={data.id}
          style={{
            borderBottomWidth: 1,
            borderColor: '#eee',
            padding: 1,
            marginTop: 10
          }}>
          <Text style={{ fontSize: 15 }}>
            {data.id}. {data.name}
          </Text>

        </View>
      )
    })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <SearchHeader editable={false} Component={TouchableOpacity} placeholder="Burger, Pizza, Salad etc" />
        <View style={styles.outerWrapper}>
          <Icon name={'ios-home'} size={100} color={'purple'} />
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchDataUser())}>
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
          <Button
            containerStyle={{ marginTop: 10 }}
            // backgroundColor="#FFBE00"
            // textColor={DISABLE_BUTTON_TEXT_COLOR}
          // lightTheme
          disabled
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home)
