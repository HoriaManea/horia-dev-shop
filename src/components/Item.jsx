import { Link } from "react-router-dom";
import styled from "styled-components";

function Item({ name, path }) {
  const StyledLink = styled(Link)`
    position: relative;
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    padding-bottom: 4px;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      height: 2px;
      width: 0%;
      background-color: black;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  `;

  return <StyledLink to={path}>{name}</StyledLink>;
}

export default Item;
