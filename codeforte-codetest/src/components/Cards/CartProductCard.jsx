import CartProduct from "../styled/CartProduct.styled"
import Button from '../Buttons/Button.styled'
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/productActions";

const CartProductCard = ({data}) => {
    const dispatch = useDispatch();
    const handleRemoveToCart = () => {
        dispatch(removeFromCart(data.id));
      };
    return(
        <>
            {data ? <CartProduct>
                <div>
                    <img src={data.image} alt={data.title} />
                </div>
                <div>
                    <p>{data.title}</p>
                    <p>{data.price}</p>
                </div>
                <div>
                    <Button onClick={() => handleRemoveToCart()} color="red">Remove</Button>
                </div>
            </CartProduct> : null}
        </>
        
    )
}

export default CartProductCard