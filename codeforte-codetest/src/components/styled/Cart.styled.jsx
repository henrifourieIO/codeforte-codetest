import styled from 'styled-components'

const Cart = styled.div`
display: ${({open}) => open ? 'block' : 'none'};
    border: 1px solid #eee;
    border-radius: 16px;
    padding: 1em;
    position: absolute;
    top: 80px;
    left: 20px;
    background-color: #fff;
    width: 500px;

    div:last-child {
        border: 0;
    }
`

export default Cart