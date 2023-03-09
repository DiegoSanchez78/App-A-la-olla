import { StyleSheet, Text, View ,FlatList,Image,Pressable} from 'react-native'
import React from 'react'

const List = (
 comidas,setCart

) => {
  return (
    <FlatList
    data={comidas}

    renderItem={(item) => (
    
      <Pressable
        keyExtractor={(item) =>item.item.id}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ margin: 10 }}>
          <Image style={styles.imagen} source={{ uri: item.item.image }} />
        </View>
        <View  >
          <Text style={{ fontFamily: 'open-sans-bold', textAlign: "center", }}>Dia {item.item.day} :</Text>
          <Text style={{ fontFamily: 'open-sans-bold', textAlign: "center" }}>{item.item.name} $ {item.item.precio}</Text>

          {cart.includes(item.item) ? (
            <Pressable onPress={() => setCart(cart.filter((x) => x.id !== item.item.id))}>
              <Text style={styles.botonRemover} >Eliminar </Text>
            </Pressable>
          ) : (
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