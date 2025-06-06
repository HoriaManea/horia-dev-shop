import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/best-sellers-mock-data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setOriginalData(data);
        localStorage.setItem("data", JSON.stringify(data));
        const rawData = localStorage.getItem("data");
        if (rawData) {
          localStorage.setItem("best_seller_products", rawData);
          localStorage.removeItem("data");
          const products = JSON.parse(rawData);
          console.log(products);
        }
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <ProductsContext.Provider
      value={{ data, originalData, setData, setOriginalData }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
