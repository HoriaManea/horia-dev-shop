import styled from "styled-components";
import Item from "./Item";

const navItems = [
  { name: "BEST SELLERS", path: "/best-sellers" },
  { name: "NEW", path: "/new" },
  { name: "DENIM", path: "/denim" },
  { name: "SHORTS", path: "/shorts" },
  { name: "BOTTOMS", path: "/bottoms" },
  { name: "TOPS", path: "/tops" },
  { name: "EVERY DAY BASICS", path: "/every-day-basics" },
  { name: "OUTWEAR", path: "/outwear" },
  { name: "ACCESSORIES", path: "/accessories" },
  { name: "SALE", path: "/sale" },
  { name: "COMING SOON", path: "/coming-soon" },
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
        <Item key={el.name} name={el.name} path={el.path} />
      ))}
    </ItemsStyle>
  );
}

export default NavItem;
