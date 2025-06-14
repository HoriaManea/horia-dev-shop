import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { ProductsContext } from "../context/ProuctsContext";
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
  const { id } = useParams();
  const { showCart, handleShowCart } = useContext(CartContext);
  const { data: productsData } = useContext(ProductsContext);

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [cartProducts, setCartProducts] = useState(() => {
    const storedCart = localStorage.getItem("cartProducts");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const totalPrice = cartProducts.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);

  useEffect(() => {
    if (productsData && productsData.bestSeller) {
      const foundProduct = productsData.bestSeller.find(
        (p) => p.id === Number(id)
      );
      setProduct(foundProduct);
      if (foundProduct) setSelectedImage(foundProduct.images[0]);
    }
  }, [id, productsData]);

  if (!product) return <div>Loading...</div>;

  function handleAddToCart() {
    const storedCart = localStorage.getItem("cartProducts");
    const cart = storedCart ? JSON.parse(storedCart) : [];

    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity =
        (cart[existingProductIndex].quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartProducts", JSON.stringify(cart));

    setCartProducts(cart);
  }

  function handleClearCart() {
    setCartProducts([]);
    localStorage.removeItem("cartProducts");
  }

  return (
    <>
      <Navbar />
      <Container>
        <LeftColumn>
          <Thumbnails>
            {product.images.map((img, i) => (
              <Thumb
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img)}
                className={selectedImage === img ? "active" : ""}
              />
            ))}
          </Thumbnails>
          <MainImageWrapper>
            <MainImage src={selectedImage} alt={product.title} />
          </MainImageWrapper>
        </LeftColumn>

        <RightColumn>
          <Title>{product.title}</Title>
          <Sizes>
            {/* <SizeBtn>S</SizeBtn> */}
            {/* <SizeBtn>M</SizeBtn> */}
            <SizeBtn>L</SizeBtn>
            {/* <SizeBtn>XL</SizeBtn>
            <SizeBtn>XXL</SizeBtn> */}
          </Sizes>
          <Price>Price: {product.price} RON</Price>
          <AddToBagBtn
            onClick={() => {
              handleAddToCart();
              handleShowCart();
            }}
          >
            ADD TO BAG
          </AddToBagBtn>
          <Description>{product.description}</Description>
        </RightColumn>
        {showCart && (
          <CartSidebar
            cartProducts={cartProducts}
            handleShowCart={handleShowCart}
            handleClearCart={handleClearCart}
            totalPrice={totalPrice}
          />
        )}
      </Container>
    </>
  );
}

export default ItemDetails;
