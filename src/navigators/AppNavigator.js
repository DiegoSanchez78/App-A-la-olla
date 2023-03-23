
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


import { Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CategoriaViandas from '../screens/CategoriaViandas';
import Viandas from '../screens/Viandas';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle:{
            backgroundColor: Platform.OS === 'android'? Colors.primary :''
          },
          headerTintColor:Platform.OS === 'android'? 'white' :Colors.primary,
          }}> 
        
         <Stack.Screen name="Home" component={CategoriaViandas}
         options={{title: 'A la olla'}}/>
         <Stack.Screen name="Viandas" component={Viandas}
         options={({route})=> ({title: route.params.categoryName})}/>
         <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator

