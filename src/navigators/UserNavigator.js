import { StyleSheet, Text, View, Platform ,TouchableOpacity} from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import UserScreen from '../screens/UserScreen'
import { COLORS } from "../constants/color";
// import UserScreen from '../screens/UserScreen'
import UserListScreen from '../screens/UserListScreen';
import UserEditScreen from '../screens/UserEditScreen'
import UserDetailScreen from '../screens/UserDetailScreen';
import {Ionicons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
    initialRoute='User'
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
        component={UserListScreen}
        // options={{
        //   title: 'Usuario'
          
        // }}      
        options={({ navigation }) => ({
          title: 'User',
          headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                  <Ionicons name="md-add" color={Platform.OS === 'android' ? 'white' : COLORS.primary} size={23} />
              </TouchableOpacity>
          )
      })}
      />
      <Stack.Screen
        name="Detalle"
        component={UserDetailScreen}
        options={{
          title: 'Detalle'
        }}      
      />
       <Stack.Screen
        name="Nuevo"
        component={UserEditScreen}
        options={{
          title: 'Nuevo'
        }}      
      />
    </Stack.Navigator>
  )
}

export default UserNavigator

const styles = StyleSheet.create({})