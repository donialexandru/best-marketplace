import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="index">
      <h1>Welcome to the best market place in the world!</h1>
      <Link to="/products">Products</Link>
    </div>
  );
}
