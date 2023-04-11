import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import UserScreen from '../screens/UserScreen'
import {COLORS} from '../constants/color'
import UserScreen from '../screens/UserScreen'


const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
        headerTitleStyle: {
        //   fontFamily: 'OpenSans_700Bold'
        }
      }}
    >
      
      <Stack.Screen
      
        name="User"
        component={UserScreen}
        options={{
          title: 'Usuario'
        }}
        
      />
    </Stack.Navigator>
  )
}

export default UserNavigator

const styles = StyleSheet.create({})