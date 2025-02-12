import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthForm from "./components/AuthForm.jsx";
import Header from "./components/Header.jsx";
import Loading from "./components/Loading.jsx";
import Products from "./components/Products.jsx";

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
