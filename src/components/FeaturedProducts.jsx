import styled from "styled-components";
import shorts from "../assets/denim-short-pant.webp";
import denim from "../assets/DENIM_5135807b-f914-452c-8488-2d32bb01adb4.webp";
import shirts from "../assets/SHIRTS_14a70292-0f9c-49e8-9793-82b811fe8988.webp";
import outWear from "../assets/outerwear_48f7e143-0e06-485d-9742-a9ef6370c6fa.webp";

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
  width: 22rem;
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

export default function FeaturedProducts() {
  let denimPants = [
    {
      id: 1,
      name: "SHORTS",
      image: shorts,
      message: "Shop Now",
    },
    {
      id: 2,
      name: "DENIM",
      image: denim,
      message: "Shop Now",
    },
    {
      id: 3,
      name: "SHIRTS",
      image: shirts,
      message: "Shop Now",
    },
    {
      id: 4,
      name: "OUTERWEAR",
      image: outWear,
      message: "Shop Now",
    },
  ];

  return (
    <FeaturedProductsStyle>
      {denimPants.map((product) => (
        <Product key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductTitle>{product.name}</ProductTitle>
          <ShopButton>{product.message}</ShopButton>
        </Product>
      ))}
    </FeaturedProductsStyle>
  );
}
