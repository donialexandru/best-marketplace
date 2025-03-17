import { createFileRoute } from "@tanstack/react-router";
import Auth from "../components/Auth.jsx";

export const Route = createFileRoute("/auth")({
  component: Auth,
});
