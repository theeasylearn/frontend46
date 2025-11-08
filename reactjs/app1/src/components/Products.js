import styled from 'styled-components';
var H3 = styled.h3`
    text-align:center;
    font-size:20px;
    border:1px solid black;
    padding:10px;
    margin:10px;
    color:red;
    text-transform:uppercase;
`;
var Div = styled.div`
    display:inline-block;
    width:25%;
    box-sizing:border-box;
    border:1px solid black;
    box-shadow:5px 5px 5px gray;
    padding:10px;
    margin-right:10px;
`;
var Item = styled.p`
    border-bottom:1px solid black;
    padding-bottom:10px;
    
`;
export default function Product(props) {
    let { name, price, weight, description, quantity } = props;
    return (
        <Div>
            <H3>{name}</H3>
            <Item><strong>Price:</strong> {price}</Item>
            <Item><strong>Weight:</strong> {weight}</Item>
            <Item><strong>Description:</strong> {description}</Item>
            <Item><strong>Quantity:</strong> {quantity}</Item>
        </Div>);
}