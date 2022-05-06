import styled from "styled-components";

const Button = styled.button`
    border: 0;
    border-radius: 20px;
    padding: 0.5em 1em;
    background-color: ${(props) => props.color};
    cursor: pointer;
`

export default Button