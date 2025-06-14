import React from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProuctsContext";
import { Link } from "react-router-dom";

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: white;
  border-left: 1px solid #ddd;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: auto;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemTitle = styled.div`
  font-weight: bold;
`;

const ItemOptions = styled.div`
  margin: 5px 0;
  color: #555;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;

const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
`;

const ItemPrice = styled.div`
  margin-top: 10px;
`;

const SmallText = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 5px;
`;

const FrequentlyBought = styled.div`
  margin-bottom: 20px;
`;

const FrequentlyBoughtTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const FrequentlyBoughtImages = styled.div`
  display: flex;
  overflow-x: auto;
`;

const FBImage = styled.img`
  width: 80px;
  margin-right: 10px;
`;

const Footer = styled.div`
  margin-top: auto;
  border-top: 1px solid #ddd;
  padding-top: 20px;
`;

const CheckoutButton = styled.a`
  display: block;
  width: 100%;
  background: black;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
`;

const CartSidebar = ({
  handleShowCart,
  cartProducts,
  handleClearCart,
  totalPrice,
}) => {
  return (
    <Sidebar>
      <Header>
        BAG (1)
        <CloseButton onClick={handleShowCart}>&times;</CloseButton>
      </Header>

      {cartProducts.map((el) => (
        <Item key={el.id}>
          <ItemImage src={el.images[0]} alt={el.title} />
          <ItemDetails>
            <ItemTitle>
              {el.quantity} X {el.title}
            </ItemTitle>
            <QuantityControl></QuantityControl>

            <QuantityControl>
              <QuantityButton>-</QuantityButton>
              <span>1</span>
              <QuantityButton>+</QuantityButton>
            </QuantityControl>

            <ItemPrice>{el.price} RON</ItemPrice>

            <SmallText onClick={handleClearCart}>
              Remove | Save for later
            </SmallText>
          </ItemDetails>
        </Item>
      ))}

      {/* <FrequentlyBought>
        <FrequentlyBoughtTitle>
          FREQUENTLY BOUGHT TOGETHER
        </FrequentlyBoughtTitle>
        <FrequentlyBoughtImages>
          <FBImage
            src="https://cdn.shopify.com/s/files/1/0257/6083/8997/products/Red_1.jpg?v=1711740385"
            alt="Red Shirt"
          />
          <FBImage
            src="https://cdn.shopify.com/s/files/1/0257/6083/8997/products/BlueStripe_1.jpg?v=1711740385"
            alt="Blue Stripe Shirt"
          />
        </FrequentlyBoughtImages>
      </FrequentlyBought> */}

      <Footer>
        <ItemTitle style={{ marginBottom: "10px" }}>
          ESTIMATED TOTAL (1 ITEM)
        </ItemTitle>
        <ItemTitle style={{ marginBottom: "10px" }}>{totalPrice}</ItemTitle>
        <Link to="/checkout">
          <CheckoutButton href="#">CHECK OUT</CheckoutButton>
        </Link>
        <CheckoutButton onClick={handleClearCart}>Remove Items</CheckoutButton>
      </Footer>
    </Sidebar>
  );
};

export default CartSidebar;
