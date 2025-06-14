import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ReusableHeroImage from "../components/ReusableHeroImage";
import ClothesCollectionHome from "../components/ClothesCollectionHome";
import HomePageThirdBannerImage from "../components/HomePageThirdBannerImage";
import ClothesCollectionThreeHome from "../components/ClothesCollectionThreeHome";
import MotionWrapper from "../components/MotionWrapper";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
function Home({ showFreeShipping }) {
  return (
    <div>
      <MotionWrapper
        initial={{ opacity: 0, filter: "blur(5px)", translateZ: 0 }}
        animate={{ opacity: 1, filter: "blur(0px)", translateZ: 0 }}
        exit={{ opacity: 0, filter: "blur(5px)", translateZ: 0 }}
        transition={{
          duration: 1,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <Navbar showFreeShipping={showFreeShipping} />
        <HeroSection />
        <ReusableHeroImage />
        <ClothesCollectionHome />
        <HomePageThirdBannerImage />
        <ClothesCollectionThreeHome />
      </MotionWrapper>
      <Footer />
    </div>
  );
}

export default Home;
