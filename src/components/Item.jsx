import styled from "styled-components";

const ItemStyle = styled.a`
  font-size: 13px;
`;

function Item({ name }) {
  return <ItemStyle>{name}</ItemStyle>;
}

export default Item;
