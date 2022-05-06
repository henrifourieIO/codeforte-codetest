import { ActionTypes } from "../constants/action.types";
import axios from '../../api/fakeStoreApi'

export const fetchProducts = () => async (dispatch) => {
    const res = await axios.get('/products')
    dispatch(setProducts(res.data))
}

// export const fetchProduct = (id) => async (dispatch) => {
//     const res = await axios.get(`/products/${id}`)
//     return res.data
// }

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: id
    }
}
