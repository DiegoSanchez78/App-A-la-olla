import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Detail = ({ route, navigation}) => {

  // const { bread } = route.params

  const bread = useSelector(state=>state.breads.selected)

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: bread.name
  //   })
  // },[])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{bread.name}</Text>
      <Text>Price: ${bread.price}</Text>
      {/* <Text>{bread.weight}</Text>
      <Text>{bread.description}</Text> */}
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        // fontFamily: 'OpenSans_700Bold',
    }
})