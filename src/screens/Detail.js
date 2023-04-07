import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { addItem } from '../store/actions/cart.action'

const Detail = () => {

  // const { bread } = route.params

  const viandaDetail = useSelector(state=>state.breads.selected)
  const dispatch = useDispatch();

  const onHandleAddToCart = ()=>{
    console.log('ADD TO CART', viandaDetail);
    dispatch(addItem({...viandaDetail, quantity:1}))
}
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: bread.name
  //   })
  // },[])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{viandaDetail.name}</Text>
      <Text>Price: ${viandaDetail.price}</Text>
      <Button title='Agregar Item' onPress={() => {
                onHandleAddToCart()
            }}/>
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