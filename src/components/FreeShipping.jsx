import styled from "styled-components";

const FreeShippingStyle = styled.div`
  background-color: #000;
  color: #fff;
  text-align: center;
  font-size: 0.75rem;
  font-family: "futura-pt", sans-serif;
  padding: 0.5rem;
  letter-spacing: 1.5px;
  font-weight: 500;
`;

function FreeShipping() {
  return (
    <FreeShippingStyle>
      FREE SHIPPING TO ROMANIA ON ALL ORDERS ABOVE RON910
    </FreeShippingStyle>
  );
}

export default FreeShipping;
