import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 1.5rem;
  background: linear-gradient(135deg, #eef2f7, #d9e0ea);
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
`;

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  border-radius: 24px;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04), 0 20px 60px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FormSection = styled.div`
  flex: 2;
  padding: 3rem;
`;

const SummarySection = styled.div`
  flex: 1;
  padding: 3rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;

  @media (min-width: 768px) {
    border-top: none;
    border-left: 1px solid #e5e7eb;
  }
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const Title = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  background: #f9fafb;
  font-size: 0.95rem;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);

  &:focus {
    outline: none;
    border-color: #7f5af0;
    box-shadow: 0 0 0 3px rgba(127, 90, 240, 0.2);
  }
`;

const Select = styled.select`
  ${Input}
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-size: 0.95rem;
    color: #374151;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  input[type="radio"] {
    accent-color: #7f5af0;
  }
`;

const SummaryBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06);
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: #4b5563;
`;

const Total = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 1.5rem;
`;

const PlaceOrderButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  padding: 1.1rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #7f5af0, #5ce1e6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  box-shadow: 0 4px 6px rgba(127, 90, 240, 0.2),
    0 8px 16px rgba(127, 90, 240, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 6px 12px rgba(127, 90, 240, 0.3),
      0 12px 24px rgba(127, 90, 240, 0.45);
    background: linear-gradient(135deg, #6d4eea, #47d7db);
  }
`;

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <CheckoutContainer>
          <FormSection>
            <Section>
              <Title>Contact</Title>
              <Input placeholder="Email" />
            </Section>

            <Section>
              <Title>Delivery</Title>
              <Select>
                <option>Romania</option>
              </Select>
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
              <Input placeholder="Address" />
              <Input placeholder="Apartment, suite, etc. (optional)" />
              <Input placeholder="Postal code" />
              <Input placeholder="City" />
              <Input placeholder="County" />
              <Input placeholder="Phone" />
            </Section>

            <Section>
              <Title>Shipping Method</Title>
              <RadioGroup>
                <label>
                  <input type="radio" name="shipping" /> Standard Courier - 6 to
                  8 business days
                </label>
                <label>
                  <input type="radio" name="shipping" /> Express Courier (Air) -
                  4 to 5 business days
                </label>
              </RadioGroup>
            </Section>

            <Section>
              <Title>Payment</Title>
              <RadioGroup>
                <label>
                  <input type="radio" name="payment" /> Credit or Debit Card
                </label>
              </RadioGroup>
              <Input placeholder="Card number" />
              <Input placeholder="Expiration date (MM / YY)" />
              <Input placeholder="Security code" />
              <Input placeholder="Name on card" />
            </Section>
          </FormSection>

          <SummarySection>
            <SummaryBox>
              <SummaryItem>
                <span>Crispy Poplin Over Shirt - Red</span>
                <span>lei 370.00</span>
              </SummaryItem>
              <SummaryItem>
                <span>Cropped Boxy Striped S/S Shirt - Khaki</span>
                <span>lei 370.00</span>
              </SummaryItem>
              <SummaryItem>
                <span>Shipping</span>
                <span>lei 73.16</span>
              </SummaryItem>
              <Total>
                <span>Total</span>
                <span>lei 813.16</span>
              </Total>
              <PlaceOrderButton>Place Order</PlaceOrderButton>
            </SummaryBox>
          </SummarySection>
        </CheckoutContainer>
      </PageWrapper>
    </>
  );
}
