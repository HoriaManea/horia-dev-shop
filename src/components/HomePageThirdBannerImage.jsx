import styled from "styled-components";
import SectionThreeImage from "../assets/home-photos/section3-iamge.webp";
import FeaturedProducts from "./FeaturedProducts";


const HeroSectionImage = styled.section`
  height: 89.55vh;
  width: 100%;
  background-image: url(${SectionThreeImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 4rem;
  box-sizing: border-box;
`;

const HeroContent = styled.div`
  color: white;
  max-width: 300px;
  padding-bottom: 200px;
`;

const HeroLabel = styled.p`
  font-size: 0.875rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

const HeroButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid white;
  color: white;
  font-size: 0.875rem;
  text-transform: lowercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }
`;

export default function HomePageThirdBannerImage() {
  return (
    <>
      <HeroSectionImage>
        <HeroContent>
          <HeroTitle>DENIM UPDATED</HeroTitle>
          <HeroButton>explore the collection</HeroButton>
        </HeroContent>  
      </HeroSectionImage>
    </>
  );
}
