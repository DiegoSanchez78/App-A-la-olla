import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartScreen = ({navigation}) => {
  return (
    <View>
      <Text>Pagina de productos</Text>
      <Button
      title='ir a Carrito'
      onPress={()=> {navigation.navigate('Detail')}}/>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})