import Cart from "../styled/Cart.styled";
import {useSelector } from 'react-redux';
import CartProductCard from "./CartProductCard";
import { useEffect } from "react";

const CartCard = ({open}) => {
    const products = useSelector((state) => state.cart);

    return(
        <Cart open={open}>
            {products.length !== 0 ? products.map((product, index) => (
                <CartProductCard key={index} data={product} />
            )) : <h3>cart is empty</h3>}
        </Cart>
    )
}

export default CartCard