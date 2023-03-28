import { createStore, combineReducers } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import ViandasReducer from "./reducers/viandas.reducer";

const RootReducer = combineReducers({
    categories:CategoryReducer,
    breads: ViandasReducer
})

export default createStore(RootReducer)