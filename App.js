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
import {StyleSheet, View} from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from "react";
import AppNavigator from './src/navigators/AppNavigator';

import { List, Header } from './src/components';
import ShowProductsSelected from './src/components/ShowProductsSelected';




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
  // const [cart,setCart] = useState([]);
  // console.log("cart items",cart)
  // const [shouldShow, setShouldShow] = useState(true);

  // const total = cart.reduce((a, b) => a + b.precio, 0);

  // const[fontsLoaded] = useFonts({
  //   'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  // });

  // const onLayoutRootView = React.useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);


  //   if (!fontsLoaded) {
  //     return null;
  //   }
  
  
  return (
    <AppNavigator/>
    // <AppNavigator>
    // <View onLayout={onLayoutRootView} style={styles.pantalla}>
    //   <StatusBar hidden />
  
    //   <Header/>
    //   <List comidas={comidas} setCart={setCart} cart={cart} total={total} />
      
      
    //   <ShowProductsSelected comidas={comidas} setCart={setCart} cart={cart} total={total} shouldShow={shouldShow} setShouldShow={setShouldShow} />
      
    // </View>
    //  </AppNavigator>
  );
};

export default Cart;

const styles = StyleSheet.create({
  // pantalla: {
  //   backgroundColor:'gray'
  // }
});

