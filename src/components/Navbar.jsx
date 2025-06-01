import styled from "styled-components";
import Logo from "./Logo";
import NavItem from "./NavItem";
import NavIcons from "./NavIcons";

const NavbarStyle = styled.nav`
  background-color: white;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.438rem 2.5rem 1.313rem 2.5rem;
`;

function Navbar() {
  return (
    <NavbarStyle>
      <Logo />
      <NavItem />
      <NavIcons />
    </NavbarStyle>
  );
}

export default Navbar;
