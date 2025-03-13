import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../components/HomePage.jsx";

export const Route = createFileRoute("/")({
  component: HomePage,
});
