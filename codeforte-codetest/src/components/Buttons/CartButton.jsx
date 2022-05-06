import StyledCartButton from '../styled/CartButton.styled';
import { useSelector } from 'react-redux';

const CartButton = ({open, setOpen}) => {
    const products = useSelector((state) => state.cart);
    return(
        <StyledCartButton onClick={() => setOpen(!open)}>
            {open ? "X" :  products.length}
        </StyledCartButton>
    )
}

export default CartButton