import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import { CartContext } from "./contexts.jsx";

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <Header />
        <Products />
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
