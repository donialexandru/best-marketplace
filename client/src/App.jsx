import React from "react";
import { createRoot } from "react-dom/client";
import Product from "./Product.jsx";

const App = () => {
  return (
    <div>
      <h1>Buy something</h1>
      <Product name="Iphone XS" describtion="Best phone on the market" />
      <Product name="MacBook" describtion="Unlimited power" />
      <Product name="LG monitor" describtion="4k monitor" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
