

// import { StatusBar } from 'expo-status-bar';
// import {StyleSheet} from "react-native";
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import React from "react";

import MainNavigator from "./src/navigators/MainNavigator";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store, storePersisted} from './src/store'

// import { List, Header } from './src/components';
// import ShowProductsSelected from './src/components/ShowProductsSelected';

// SplashScreen.preventAutoHideAsync();


const Cart = () => {

  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={storePersisted}>
        <MainNavigator />
      </PersistGate>     
    </Provider>
  );
};

export default Cart;

// const styles = StyleSheet.create({
//   // pantalla: {
//   //   backgroundColor:'gray'
//   // }
// });

