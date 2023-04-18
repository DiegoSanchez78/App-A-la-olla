import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'

import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';

import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import ViandasReducer from "./reducers/viandas.reducer";
import ordersReducer from "./reducers/orders.reducer";
import ImageReducer from "./reducers/image.reducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

const RootReducer = combineReducers({
    categories:CategoryReducer,
    breads: ViandasReducer,
    cart: CartReducer,
    orders: ordersReducer,
    images : ImageReducer,
})

const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const storePersisted = persistStore(store);