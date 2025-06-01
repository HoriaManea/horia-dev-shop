import styled from "styled-components";
import Item from "./Item";

const navItems = [
  { name: "BEST SELLERS" },
  { name: "NEW" },
  { name: "DENIM" },
  { name: "SHORTS" },
  { name: "BOTTOMS" },
  { name: "TOPS" },
  { name: "EVERY DAY BASICS" },
  { name: "OUTWEAR" },
  { name: "ACCESSORIES" },
  { name: "SALE" },
  { name: "COMING SOON" },
];

const ItemsStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

function NavItem() {
  return (
    <ItemsStyle>
      {navItems.map((el) => (
        <Item key={el.nav} name={el.name} />
      ))}
    </ItemsStyle>
  );
}

export default NavItem;
