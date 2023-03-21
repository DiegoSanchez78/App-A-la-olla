

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
  
    // <View onLayout={onLayoutRootView} style={styles.pantalla}>
    //   <StatusBar hidden />
  
    //   <Header/>
    //   <List comidas={comidas} setCart={setCart} cart={cart} total={total} />
      
      
    //   <ShowProductsSelected comidas={comidas} setCart={setCart} cart={cart} total={total} shouldShow={shouldShow} setShouldShow={setShouldShow} />
      
    // </View>
    <AppNavigator/>
    
  );
};

export default Cart;

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor:'gray'
  }
});

