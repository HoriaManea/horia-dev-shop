import styled from "styled-components";
import Navbar from "../components/Navbar";
import SortItems from "../components/SortItems";
import Items from "../components/Items";
import Wrapper from "../components/Wrapper";

export default function BestSellers() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <SortItems />
        <Items />
      </Wrapper>
    </>
  );
}
