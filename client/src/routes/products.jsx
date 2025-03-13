import { createFileRoute } from "@tanstack/react-router";
import Products from "../components/Products.jsx";

export const Route = createFileRoute("/products")({
  component: Products,
});
