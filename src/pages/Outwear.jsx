import { useState, useEffect, useContext, useMemo } from "react";
import { ProductsContext } from "../context/ProuctsContext";
import Navbar from "../components/Navbar";
import SortItems from "../components/SortItems";
import Items from "../components/Items";
import MotionWrapper from "../components/MotionWrapper";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

export default function Outwear() {
  const [sortOption, setSortOption] = useState("");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const { data, originalData, setData } = useContext(ProductsContext);

  const outWearProducts = useMemo(() => {
    if (!data || !Array.isArray(data.outWearProducts)) return [];
    return data.outWearProducts;
  }, [data]);

  useEffect(() => {
    if (!sortOption) {
      setData(originalData);
      return;
    }

    const newData = [...data];
    if (sortOption === "price") {
      newData.sort((a, b) => a.price - b.price);
    } else if (sortOption === "title") {
      newData.sort((a, b) => a.title.localeCompare(b.title));
    }

    setData(newData);
  }, [sortOption]);

  function handleSortItems() {
    setShowSortDropdown((prev) => !prev);
  }

  function handleSortOption(e) {
    setSortOption(e.target.value);
  }

  return (
    <MotionWrapper
      initial={{ opacity: 0, filter: "blur(5px)", translateZ: 0 }}
      animate={{ opacity: 1, filter: "blur(0px)", translateZ: 0 }}
      exit={{ opacity: 0, filter: "blur(5px)", translateZ: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <>
        <Navbar />
        <Wrapper>
          <SortItems
            showSortDropdown={showSortDropdown}
            handleSortItems={handleSortItems}
            handleSortOption={handleSortOption}
          />
          <Items data={outWearProducts} />
        </Wrapper>
      </>
      <Footer />
    </MotionWrapper>
  );
}
