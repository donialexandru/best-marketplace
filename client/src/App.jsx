import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthForm from "./components/AuthForm.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

const App = () => {
  return (
    <StrictMode>
      <div>
        <Header />
        <AuthForm />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
