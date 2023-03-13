import { StyleSheet, Text, View ,FlatList,Image,Pressable} from 'react-native'
import React from 'react'
import { botonStyle } from '../constants/botons'
import color from '../constants/color'

const List = (
 {comidas,setCart,cart,total}

) => {
  return (
    <FlatList
    data={comidas}

    renderItem={(item) => (
      console.log({item}),
      
      <Pressable
        keyExtractor={(item) =>item.id}
        style={{ flexDirection: "row", alignItems: "center" }}
        
      >
        <View style={{ margin: 10 }}>
          <Image style={styles.imagen} source={{uri: item.item.image }} />
        </View>
        <View  >
          <Text style={{ fontFamily: 'open-sans-bold', textAlign: "center", }}>Dia {item.item.day} :</Text>
          <Text style={{ fontFamily: 'open-sans-bold', textAlign: "center" }}>{item.item.name} $ {item.item.precio}</Text>

          {cart.includes(item.item) 
          ? (
            <Pressable onPress={() => setCart(cart.filter((x) => x.id !== item.item.id))}>
              <Text style={styles.botonRemover} >Eliminar </Text>
            </Pressable>  ) : (
            <Pressable onPress={() => setCart([...cart, item.item])}>
              <Text style={styles.botonAgregar} >Agregar</Text>
            </Pressable>
          )} 

          </View>
        </Pressable>

      )}
    />
    
  )
  
}

export default List

const styles = StyleSheet.create({
   imagen:{
    width: 200, 
    height: 100, 
    borderRadius: 8
  },
  botonAgregar:{
    ...botonStyle,
    backgroundColor:color.Boton,
    fontFamily: 'open-sans-bold'
    
    
  },
  botonRemover:{
    ...botonStyle,
    backgroundColor:color.BotonSelected,
    fontFamily: 'open-sans'
  },
})