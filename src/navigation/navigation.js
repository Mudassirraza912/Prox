import React from 'react'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import LandingScreen from '../screens/LandingScreen/landingScreen'
import SignIn from '../screens/Signin/signin'
import ForgotPassword from '../screens/ForgotPassword/forgotPassword'
import VerificationOTP from '../screens/ForgotPassword/Verification'
import ChangePassword from '../screens/ForgotPassword/changePassword'
import SignUp from '../screens/SignUp/signup'
import EnableLocation from '../screens/ServicesPermission/enableLocation'
import BottomTabs from './bottomNavigation'
import { stopClock } from 'react-native-reanimated'
import Selectlocation from '../screens/ServicesPermission/selectLocation'
import SearchScreen from '../screens/Search/Search.screen'
import GooglePlacesInput from '../components/Map/LocationSearch'
import { ParallaxDemo } from '../components/PrallaxTabs/PrallaxTab'
import Checkout from '../screens/Checkout'
import { RatingReview } from '../screens/RatingReview/RatingReview'
const Stack = createStackNavigator()


const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerificationOTP" component={VerificationOTP} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="EnableLocation" component={EnableLocation} />
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="Selectlocation" component={Selectlocation}  />
        <Stack.Screen name="SearchGooglePlaces" component={GooglePlacesInput}  />
        <Stack.Screen name="Search" component={SearchScreen}  />
        <Stack.Screen name="Checkout" component={Checkout}  />
        <Stack.Screen name="ResturantMenu" component={ParallaxDemo} />
        <Stack.Screen name="RatingReview" component={RatingReview} />

        {/* <Stack.Screen name="Home" component={MyTabs} /> */}
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
