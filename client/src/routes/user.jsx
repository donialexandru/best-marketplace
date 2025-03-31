import { createFileRoute } from "@tanstack/react-router";
import UserAccountManagement from "../components/UserAccountManagement.jsx";

export const Route = createFileRoute("/user")({
  component: UserAccountManagement,
});
