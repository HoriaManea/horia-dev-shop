import styled from "styled-components";
import HeroImage from "../assets/hero-photo.webp";
const HeroSectionImage = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function HeroSection() {
  return <HeroSectionImage>dd</HeroSectionImage>;
}
