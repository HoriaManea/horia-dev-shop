import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 3rem 2rem 2rem;
  font-family: "Helvetica Neue", sans-serif;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1 1 100%;
`;

export const FooterColumn = styled.div`
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const FooterLink = styled.a`
  font-size: 0.875rem;
  color: #ccc;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

export const Newsletter = styled.div`
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 0.875rem;
    color: #aaa;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
`;

export const EmailInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  padding: 0.5rem 0;
  font-size: 0.875rem;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;
`;

export const Icon = styled.i`
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #222;
  font-size: 0.75rem;
  color: #777;
  text-align: left;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <Logo>Horia.dev</Logo>
        <FooterColumn>
          <FooterTitle>SHOP</FooterTitle>
          <FooterLink as={Link} to="/best-sellers">
            best sellers
          </FooterLink>
          <FooterLink as={Link} to="/new">
            new
          </FooterLink>
          <FooterLink as={Link} to="/denim">
            denim
          </FooterLink>
          <FooterLink as={Link} to="/shorts">
            shorts
          </FooterLink>
          <FooterLink as={Link} to="/tops">
            tops
          </FooterLink>
          <FooterLink as={Link} to="/outwear">
            outwear
          </FooterLink>
          <FooterLink as={Link} to="/accessories">
            accessories
          </FooterLink>
          <FooterLink as={Link} to="/coming-soon">
            coming-soon
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>HELP</FooterTitle>
          <FooterLink>contact us</FooterLink>
          <FooterLink>track order</FooterLink>
          <FooterLink>help center</FooterLink>
          <FooterLink>shipping</FooterLink>
          <FooterLink>acessibility</FooterLink>
          <FooterLink>returns + exchanges</FooterLink>
          <FooterLink>cookies sttings</FooterLink>
          <FooterLink>terms of use</FooterLink>
          <FooterLink>terms of sale</FooterLink>
          <FooterLink>privacy policy</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>INFO</FooterTitle>
          <FooterLink>our story</FooterLink>
          <FooterLink>careers</FooterLink>
          <FooterLink>the edit</FooterLink>
          <FooterLink>rewards</FooterLink>
        </FooterColumn>

        <Newsletter>
          <FooterTitle>NEWSLETTER</FooterTitle>
          <p>Sign up to our newsletter to get mnml stuff.</p>
          <InputWrapper>
            <EmailInput placeholder="email" />
            <SubmitButton>submit</SubmitButton>
          </InputWrapper>
          <SocialIcons>
            <Icon className="fa-brands fa-instagram" />
            <Icon className="fa-brands fa-youtube" />
            <Icon className="fa-brands fa-facebook-f" />
            <Icon className="fa-brands fa-tiktok" />
          </SocialIcons>
        </Newsletter>
      </FooterTop>

      <FooterBottom>
        <span>© 2025 Horia.dev</span>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
