import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/header/Header.jsx";
import { CartProvider } from "../context/CartContext.jsx";

function RootComponent() {
  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
