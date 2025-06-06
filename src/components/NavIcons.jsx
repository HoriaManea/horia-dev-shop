import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const NavIconsStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
  
function NavIcons() {
  return (
    <NavIconsStyle>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faCartShopping} />
    </NavIconsStyle>
  );
}

export default NavIcons;
