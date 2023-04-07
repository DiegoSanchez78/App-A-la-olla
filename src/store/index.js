import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./reducers/cart.reducer";

import CategoryReducer from "./reducers/category.reducer";
import ViandasReducer from "./reducers/viandas.reducer";
import ordersReducer from "./reducers/orders.reducer";

const RootReducer = combineReducers({
    categories:CategoryReducer,
    breads: ViandasReducer,
    cart: CartReducer,
    orders: ordersReducer
})

export default createStore(RootReducer,applyMiddleware(thunk))