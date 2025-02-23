import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";
import { CartContext } from "../contexts";

export const Route = createRootRoute({
  component: RootComponent,
});

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
