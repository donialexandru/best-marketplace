import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/header/Header.jsx";
import { CartContext } from "../contexts";

function RootComponent() {
  const cartHook = useState([]);
  return (
    <>
      <CartContext.Provider value={cartHook}>
        <Header />
        <Outlet />
      </CartContext.Provider>
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
