import React from "react";
import { createRoot } from "react-dom/client";
import AuthForm from "./components/AuthForm.jsx";

const App = () => {
  return (
    <div>
      <h1>Buy something</h1>
      <AuthForm />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
