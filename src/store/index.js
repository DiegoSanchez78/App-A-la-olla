import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./reducers/cart.reducer";

import CategoryReducer from "./reducers/category.reducer";
import ViandasReducer from "./reducers/viandas.reducer";
import ordersReducer from "./reducers/orders.reducer";
import ImageReducer from "./reducers/image.reducer";

const RootReducer = combineReducers({
    categories:CategoryReducer,
    breads: ViandasReducer,
    cart: CartReducer,
    orders: ordersReducer,
    images : ImageReducer,
})

export default createStore(RootReducer,applyMiddleware(thunk))