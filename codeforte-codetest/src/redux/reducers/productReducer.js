import { ActionTypes } from "../constants/action.types";

const initialProductState = {
    products: [],
}
const initialCartState = {
    cart: [],
}

export const productReducer = (
    state = initialProductState,
    { type, payload }
) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state;
    }
}


export const cartReducer = (
    state = initialCartState.cart,
    { type, payload }
) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return [...state, payload];
        case ActionTypes.REMOVE_FROM_CART:
            const newState = removeFromCart(state, payload)
            return [...newState];
        default:
            return state;
    }
}


const removeFromCart = (state, id) => {
    let newState = state;
    for (let i = 0; i <= newState.length; i++) {
        if (newState[i].id === id) {
            newState.splice(i, 1);
            return newState
        }
    };
}