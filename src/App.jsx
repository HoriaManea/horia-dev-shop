import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BestSellers from "./pages/BestSellers";
import New from "./pages/New";
import Denim from "./pages/Denim";
import Shorts from "./pages/Shorts";
import Bottoms from "./pages/Bottoms";
import Tops from "./pages/Tops";
import EveryDayBasics from "./pages/EveryDayBasics";
import Outwear from "./pages/Outwear";
import Accessories from "./pages/Accessories";
import Sale from "./pages/Sale";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  const [showFreeShipping, setShowFreeShipping] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("freeShippingShown");

    if (!alreadyShown) {
      setShowFreeShipping(true);
      localStorage.setItem("freeShippingShown", "true");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home showFreeShipping={showFreeShipping} />}
        />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/new" element={<New />} />
        <Route path="/denim" element={<Denim />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/bottoms" element={<Bottoms />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/every-day-basics" element={<EveryDayBasics />} />
        <Route path="/outwear" element={<Outwear />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}
