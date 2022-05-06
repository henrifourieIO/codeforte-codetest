import { combineReducers } from "redux";
import { productReducer, cartReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    cart: cartReducer,
})

export default reducers;
