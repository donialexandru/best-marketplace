import { createFileRoute } from "@tanstack/react-router";
import Cart from "../components/Cart.jsx";

export const Route = createFileRoute("/cart")({
  component: Cart,
});
