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
import ScrollProvider from "./components/ScrollProvider";
import ItemDetalis from "./pages/ItemDetalis";
import Layout from "./components/Layout";
import CheckoutPage from "./pages/CheckoutPage";
import Contact from "./pages/Contact";

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
      <ScrollProvider>
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
          <Route path="/best-sellers/:id" element={<ItemDetalis />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/track_order" element={<TrackOrder />} />
          <Route path="/help_center" element={<HelpCenter />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/accesibillty" element={<Accesibillty />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/term_of_use" element={<TermOfUse />} />
          <Route path="/term_of_sale" element={<TermOfSale />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} /> */}
        </Routes>
      </ScrollProvider>
    </BrowserRouter>
  );
}
