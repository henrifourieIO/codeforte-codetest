import styled from "styled-components";

const CartProduct = styled.div`
    width: 100%;
    border-bottom: 1px solid #eee;
    padding: 0.5em 1em;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 1em;

    div {
        display: flex;
        align-item: center;
    }

    img {
        width: 50px;
        margin: auto 0;
    }
`

export default CartProduct;