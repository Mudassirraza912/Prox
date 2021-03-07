import React from 'react'
import { View, Text } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home.screen'


import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwsome from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator()

function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
          activeTintColor: "#FFBE00",
          inactiveTintColor: "#D3D8DF"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={'ios-home'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={'ios-notifications'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwsome name={'shopping-bag'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}



export default BottomTabs