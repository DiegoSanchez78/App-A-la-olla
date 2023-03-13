import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import Pantalla2 from '../screens/Pantalla2'
import Pantalla1 from '../screens/Pantalla1'
import { botonStyle } from '../constants/botons'
import color from '../constants/color'


const ShowProductsSelected = ({total,setShouldShow,shouldShow,cart}) => {
  return (
    
    <View>
<View style={{ height: 1, borderColor: "gray", borderWidth: 2 }} />
<View style={styles.container}>      
        {shouldShow ? (
          <Pressable onPress={() => { setShouldShow(false) }} >
            <Text style={styles.botonRemover}>Ocultar seleccionados </Text>
          </Pressable>
        ) : (
          <Pressable  onPress={() => { setShouldShow(true) } }>
            <Text style={styles.botonAgregar}>Mostrar seleccionados</Text>
          </Pressable>
        )}

        {shouldShow ?
          (
            <Text style={{ textAlign: "center", fontSize: 20 }}  >
              {cart.map((item) => (

                <View style={{ margin: 2 }} >
                  <Text style={{ textAlign: "center", margin: 3 }}>{item.name} $ {item.precio}{"\n"}</Text>
                </View>
                 ))}
            </Text> 
          ) : null}
          </View>
      
      <View style={styles.container}>      
       
        <View>
          
          <Text>Total: {total}</Text>
          
        </View>
        {console.log({total})}
        <View >
          {
            total
            ?<Pantalla2 total={!total}/>
            :<Pantalla1 total={total}/>
          }
        </View>        

      </View>  
    </View>
    
  )
  
}

export default ShowProductsSelected

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    maxHeight:"20%"
    
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