// import { StatusBar } from 'expo-status-bar';
// import React, {useEffect, useState} from 'react';
// import { Button, StyleSheet, Text, View ,Modal } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { List, NewItemHeader } from './src/components';

// export default function App() {

//   const [itemText ,setItemText] = useState('')
//   const [items, setItems]= useState([])

//   //Modal 
//   const [modalVisible, setModalVisible]=useState (false);
//   const [selectedItem, setSelectedItem]= useState (null)

// const removeItem = (id) => {
//   setModalVisible(!modalVisible)
//   setItems((oldArry) => oldArry.filter((item) => item.id !== id)); 
 
//   setSelectedItem(null)
// }

// const selecItem = (item) => {
//   setSelectedItem(item);
//   setModalVisible(true);
// }

//   // useEffect( ()=> {
//   //   console.log('itemText', itemText)
//   // },[itemText])

//   //debuguear con use effect}
//   useEffect( ()=> {
//     console.log('items',itemText, items)
//   },[itemText,items])


//   //tomar valor del input
//   const onChangeText = (text) => {
//     setItemText(text);
//   };

//   //funcion del boton agregar0
//   const addItem = () => {
//     console.log("addItem start",JSON.stringify({itemText,items}))
//     setItems (oldArry => [...oldArry, {id: Date.now(),value: itemText}]);
//     setItemText('');
//     console.log("addItem end",itemText)
//   }

//   return (
   
//     <View style={styles.screen}>
//       <NewItemHeader
//         onChangeText={onChangeText}
//         itemText={itemText}
//         addItem={addItem}
//       />
//       <Text style={styles.textElimnar}>Si desea eliminar clickear el producto</Text>
//          <List items={items} selecItem={selecItem} />
//           {/* <FlatList
//             data= {items}
//             renderItem={(itemData) => (
//               <Pressable style={styles.contentList} onPress={()=>{ 
//                 selecItem(itemData.item)
//                 }}>
//                <Text style={styles.item}>{itemData.item.value}</Text>
//               </Pressable>
//             )}  
//              >
//           </FlatList> */}
//           <Modal
//             animationType='slide'
//             transparent={true}
//             visible={modalVisible}>

//               <View style={styles.modalContainer}>
//                 {/* <View style={styles.modalTitle}>
//                   <Text >Eliminar el producto : </Text>
//                 </View> */}
//                   <View style={styles.modalContainerProduct}>
//                     <Text style={styles.textProductDelete} >Esta seguro que desea eliminar el producto : {`\n`}{`\n`}{selectedItem?.value} ?</Text>
//                 </View>
//                 <View style={styles.modalAction}>
//                   <Button title='Cancelar' onPress={() => {
//                     setModalVisible(false)
//                     setSelectedItem(null)
//                   }}/>
//                    <Button title='Eliminar' onPress={() => {
//                     removeItem(selectedItem.id)
//                   }}/>
//                 </View>

//               </View>
//           </Modal>
          
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     padding:30,
//   },
//   // inputContainer:{
//   //   marginTop: 30,
//   //   flexDirection:'row',
//   //   justifyContent:'space-between',
//   //   alignItems:'center'
//   // },
//   // input:{
//   //   width:'70%',
//   //   height: 40,
//   //   borderBottomColor:'black',
//   //   borderBottomWidth:1,
//   // },
//   itemContainer:{
//     marginTop:30,
//     width:'100%',
//     height: 40,
//     alignItems:'center',
//   },
//   // contentList:{
//   //   padding:10,
//   //   borderRadius:5,
//   //   backgroundColor:"#ccc"
//   // },
//   modalContainer:{
//     height:100,
//     width:300,
//     marginTop: 400,
//     alignSelf:'center',
    
//   },
//   modalContainerProduct:{
//     height:100,
//     width:300,
//     alignSelf:'center',
//     backgroundColor:'#94FEF8',

//   },
//   modalTitle: {
//     backgroundColor: "#ccc",
//     padding:10,
//   },
//   modalContent: {
//     padding: 10,
//     width:'50%'
//   },
//   modalAction: {
//     // marginTop:30,
//     flex:0,
//     borderRadius:10
//   },
//   textElimnar:{
//     textAlign:'center',
//     padding:10,
//     color:'gray'
//   },
//   textProductDelete:{
//     textAlign:'center',
//     marginTop:'10%'
    
    
//   }
  
// });
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text,View, Image,Pressable,} from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from "react";

import color from './src/constants/color';
import { botonStyle } from './src/constants/botons';
import Pantalla1 from './src/screens/Pantalla1';
import Pantalla2 from './src/screens/Pantalla2';
import { List } from './src/components';



const comidas = [
  {
    id: "0",
    day:"Lunes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU",
    name: "icecream",
    precio: 890
  },
  {
    id: "1",
    day:"Martes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85O96gPiso_j2gaS0cePTBY4mCR3pumV6tw&usqp=CAU",
    name: "biscuit",
    precio: 700
  },
  {
    id: "2",
    day:"Miercoles",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQWeRoxxLEr1RLIp8dJtw-NQvSE4xtlhwA&usqp=CAU",
    name: "chocolate",
    precio: 640
  },
  {
    id: "3",
    day:"Jueves",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQWeRoxxLEr1RLIp8dJtw-NQvSE4xtlhwA&usqp=CAU",
    name: "chocolate",
    precio: 950
  },
];

SplashScreen.preventAutoHideAsync();


const Cart = () => {
  const [cart,setCart] = useState([]);
  console.log("cart items",cart)
  const [shouldShow, setShouldShow] = useState(true);

  const total = cart.reduce((a, b) => a + b.precio, 0);

  const[fontsLoaded] = useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


    if (!fontsLoaded) {
      return null;
    }
  
 
  
  
  return (
    <View onLayout={onLayoutRootView}>
      <StatusBar hidden/>
      <View style={styles.containerLogo}>
        <Image style={styles.logo}
          source={require('../appCoderReacNative/assets/LogoOlla.jpeg')}
        />
        <Text style={styles.nameApp}>A la olla</Text>
      </View>
      <Text style={{ textAlign: "center", fontSize: 20 ,fontFamily: 'open-sans'}}>Menu de Lunes a Jueves</Text>

      {/* <List comidas={comidas} setCart={setCart}/> */}

      {comidas.map((item) => (
        <Pressable
          key={item.id}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ margin: 10 }}>
            <Image style={styles.imagen} source={{ uri: item.image }} />
          </View>
          <View  >
            <Text style={{ fontFamily: 'open-sans-bold', textAlign: "center", }}>Dia {item.day} :</Text>
            <Text style={{ fontFamily: 'open-sans-bold', textAlign: "center" }}>{item.name} $ {item.precio}</Text>

            {cart.includes(item) ? (
              <Pressable onPress={() => setCart(cart.filter((x) => x.id !== item.id))}>
                <Text style={styles.botonRemover} >Eliminar </Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => setCart([...cart, item])}>
                <Text style={styles.botonAgregar} >Agregar</Text>
              </Pressable>
            )}

          </View>
        </Pressable>
      ))}
     
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
        <View>
          <Text>Total: {total}</Text>
        </View>
        {/* PANTALLAS */}
        <View >
          {
            total
            ?<Pantalla2 total={!total}/>
            :<Pantalla1 total={total}/>
          }
        </View>        

      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  
  containerLogo: {
    width: 70,
    height: 70,
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent:'space-between',
    alignItems:'center',
   
  },
  logo: {
    width: "100%",
    height:"100%",
    borderRadius:200,
  },
  nameApp:{
    fontSize:20,
    marginLeft:20,
    fontFamily: 'open-sans-bold'
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
  imagen:{
    width: 200, 
    height: 100, 
    borderRadius: 8
  },
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    maxHeight:"20%"
    
  },
  
});
