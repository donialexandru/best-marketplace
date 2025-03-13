import { createFileRoute } from "@tanstack/react-router";
import Favourites from "../components/Favourites.jsx";

export const Route = createFileRoute("/favourites")({
  component: Favourites,
});
