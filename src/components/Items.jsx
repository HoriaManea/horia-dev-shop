import styled from "styled-components";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const FeaturedProductsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  list-style: none;
`;

const Product = styled.li`
  list-style: none;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 20rem;
  border-radius: 0.5rem;
`;

const ProductTitle = styled.h3`
  padding-top: 6px;
  font-size: 16px;
  margin: 0.5rem 0;
  font-weight: 300;
  letter-spacing: 2px;
  color: #555;
  text-transform: uppercase;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const ShopButton = styled.button`
  background: none;
  border: none;
  color: #555;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  padding: 0;

  &:after {
    content: " →";
    transition: transform 0.2s ease;
  }

  &:hover:after {
    transform: translateX(4px);
  }

  &:hover {
    color: #000;
  }
`;

function Items() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/best-sellers-mock-data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Eroare la încărcarea JSON-ului:", err));
  }, []);

  return (
    <FeaturedProductsStyle>
      {data ? (
        data.map((el) => (
          <Product key={el.id}>
            <ProductImage src={el.images[0]} alt={el.name} />
            <ProductTitle>{el.title}</ProductTitle>
            <ShopButton>{el.price}</ShopButton>
          </Product>
        ))
      ) : (
        <Spinner />
      )}
    </FeaturedProductsStyle>
  );
}

export default Items;
