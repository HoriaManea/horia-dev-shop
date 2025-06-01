import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PantsCollection from "../components/PantsCollection";
function Home({ showFreeShipping }) {
  return (
    <>
      <Navbar showFreeShipping={showFreeShipping} />
      <HeroSection />
      <PantsCollection />
    </>
  );
}

export default Home;
