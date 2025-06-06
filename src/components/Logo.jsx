import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
`;

function Logo() {
  return (
    <StyledLink to="/">
      <StyledLogo src={logo} alt="Horia.dev logo" />
    </StyledLink>
  );
}

export default Logo;
