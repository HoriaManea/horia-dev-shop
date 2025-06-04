import styled from "styled-components";
import denimpant1 from "../assets/home-photos/pant-homepage-1.webp";
import denimpant2 from "../assets/home-photos/pant-homepage-2.webp";
import denimpant3 from "../assets/home-photos/pant-homepage-3.webp";
import denimpant4 from "../assets/home-photos/pant-homepage-4.webp";

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

export default function ClothesCollectionThreeHome() {
  let denimPants = [
    {
      id: 1,
      name: "NEW SHORTS",
      image: denimpant1,
      message: "Shop Now",
    },
    {
      id: 2,
      name: "RAW DENIM",
      image: denimpant2,
      message: "Shop Now",
    },
    {
      id: 3,
      name: "THE PRINT SHOP ",
      image: denimpant3,
      message: "Shop Now",
    },
    {
      id: 4,
      name: "LEATHER/WAXED  ",
      image: denimpant4,
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
