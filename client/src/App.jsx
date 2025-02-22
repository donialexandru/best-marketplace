import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import Profile from "./components/Profile.jsx";
import Favourites from "./components/Favourites.jsx";

const App = () => {
  return (
    <StrictMode>
      <Header />
      <Products />
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
