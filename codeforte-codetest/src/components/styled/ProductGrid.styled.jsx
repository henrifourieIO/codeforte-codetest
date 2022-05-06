import styled from "styled-components";

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2em;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 930px) {
        grid-template-columns: 1fr 1fr ;
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

export default ProductGrid