import styled from 'styled-components'
import Button from '../Buttons/Button.styled'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/productActions'
import Product from '../styled/Product.styled'


const ProductCard = ({ data }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(data));
      };

    return (
        <Product>
            <div>
                <img src={data.image ? data.image : "#"} alt={data.title ? data.title : "#"} />
            </div>
            <div>
                {data ? <h4>{data.title}</h4> : null}
                {data ? <h5>{data.price}</h5> : null}
                <Button onClick={() => handleAddToCart()} color="lightgreen">Add to Cart</Button>
            </div>
        </Product>
    )
}



export default ProductCard

