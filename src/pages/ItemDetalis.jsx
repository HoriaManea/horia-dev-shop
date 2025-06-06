import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CartSidebar from "../components/CartSidebar";

export const Container = styled.div`
  display: flex;
  padding: 40px;
  font-family: Arial, sans-serif;
`;

export const LeftColumn = styled.div`
  width: 50%;
  display: flex;
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 20px;
`;

export const Thumb = styled.img`
  width: 60px;
  height: 90px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border-color: #000;
  }

  &.active {
    border-color: #000;
  }
`;

export const MainImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MainImage = styled.img`
  width: 400px;
  object-fit: cover;
`;

export const RightColumn = styled.div`
  width: 50%;
  padding: 0 40px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export const Price = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

export const Sizes = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

export const SizeBtn = styled.button`
  padding: 10px 15px;
  border: 1px solid #000;
  background: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #000;
    color: white;
  }
`;

export const AddToBagBtn = styled.button`
  background: black;
  color: white;
  padding: 15px;
  width: 100%;
  border: none;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #444;
`;

function ItemDetails() {
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const { showCart, handleShowCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`/data/best-sellers-mock-data.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const item = data.find((el) => el.id === Number(id));
        if (item) setSelectedImage(item.images[0]);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  if (!data) return <div>Loading...</div>;
  if (!Array.isArray(data)) return <div>Data is invalid</div>;

  const item = data.find((el) => el.id === Number(id));
  if (!item) return <div>Item not found</div>;

  return (
    <>
      <Navbar />
      <Container>
        <LeftColumn>
          <Thumbnails>
            {item.images.map((el, index) => (
              <Thumb
                key={index}
                src={el}
                alt={`thumb-${index}`}
                onClick={() => setSelectedImage(el)}
                className={selectedImage === el ? "active" : ""}
              />
            ))}
          </Thumbnails>
          <MainImageWrapper>
            <MainImage src={selectedImage} alt={item.title} />
          </MainImageWrapper>
        </LeftColumn>

        <RightColumn>
          <Title>{item.title}</Title>
          <Sizes>
            <SizeBtn>S</SizeBtn>
            <SizeBtn>M</SizeBtn>
            <SizeBtn>L</SizeBtn>
            <SizeBtn>XL</SizeBtn>
            <SizeBtn>XXL</SizeBtn>
          </Sizes>
          <Price>Price: {item.price} RON</Price>
          <AddToBagBtn onClick={handleShowCart}>ADD TO BAG</AddToBagBtn>
          <Description>{item.description}</Description>
        </RightColumn>
        {showCart && <CartSidebar />}
      </Container>
    </>
  );
}

export default ItemDetails;
