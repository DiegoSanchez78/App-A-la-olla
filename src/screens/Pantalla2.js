import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../constants/color'

const Pantalla2 = () => {
  return (
    <View   >
      <Text style={styles.pant2}> Tienes productos en el carrito</Text>
    </View>
  )
}

export default Pantalla2

const styles = StyleSheet.create({
    pant2: {
        backgroundColor: color.BotonSelected,
        fontSize: 20,
        width: '100%',
        height: 40,
        borderColor: 'blue',
        borderWidth: 1,
        padding: 5
    }
})