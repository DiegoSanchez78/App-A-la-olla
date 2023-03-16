
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CartScreen from '../screens/CartScreen';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator initalRouteName="homeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"> 
         <Stack.Screen name="1" component={CartScreen}/>
         <Stack.Screen name="Detail" component={Detail}/>

        </Stack.Navigator>

   </NavigationContainer>
  )
}

export default AppNavigator

