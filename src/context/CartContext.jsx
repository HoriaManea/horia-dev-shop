import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart((prev) => !prev);
  }

  return (
    <CartContext.Provider value={{ showCart, handleShowCart }}>
      {children}
    </CartContext.Provider>
  );
}
