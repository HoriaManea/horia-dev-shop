import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ReusableHeroImage from "../components/ReusableHeroImage";
import ClothesCollectionHome from "../components/ClothesCollectionHome";
import HomePageThirdBannerImage from "../components/HomePageThirdBannerImage";
import ClothesCollectionThreeHome from "../components/ClothesCollectionThreeHome";

function Home({ showFreeShipping }) {
  return (
    <div>
      <Navbar showFreeShipping={showFreeShipping} />
      <HeroSection />
      <ReusableHeroImage />
      <ClothesCollectionHome />
      <HomePageThirdBannerImage />
      <ClothesCollectionThreeHome />
    </div>
  );
}

export default Home;
