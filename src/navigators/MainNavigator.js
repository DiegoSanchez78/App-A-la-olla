import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavegator'


const MainNavigator = () => {
  return (
    <NavigationContainer>
        <TabsNavigator />
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})
