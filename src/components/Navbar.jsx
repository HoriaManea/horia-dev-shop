import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import NavItem from "./NavItem";
import NavIcons from "./NavIcons";
import FreeShipping from "./FreeShipping";

const NavbarStyle = styled.nav`
  background-color: white;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.438rem 2.5rem 1.313rem 2.5rem;
`;

function Navbar() {
  const [showFreeShipping, setShowFreeShipping] = useState(false);

  useEffect(function () {
    setShowFreeShipping(true);
  }, []);

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
