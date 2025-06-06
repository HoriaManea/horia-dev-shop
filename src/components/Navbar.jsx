import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import NavItem from "./NavItem";
import NavIcons from "./NavIcons";
import FreeShipping from "./FreeShipping";

const NavbarStyle = styled.nav`
  background-color: white;
  box-shadow: 0 6px 10px rgba(0, 0, 0.1, 0.2);
  height: 5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.438rem 2.5rem 1.313rem 2.5rem;
`;

function Navbar({ showFreeShipping }) {
  return (
    <>
      {showFreeShipping && <FreeShipping />}
      <NavbarStyle>
        <Logo />
        <NavItem />
        <NavIcons />
      </NavbarStyle>
    </>
  );
}

export default Navbar;
