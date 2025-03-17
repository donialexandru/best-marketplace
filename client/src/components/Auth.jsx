import { useState } from "react";

function Auth() {
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const toogleMenu = () => {
    setMode(mode === "login" ? "register" : "login");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (mode === "register" && password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    const endpoint = mode === "login" ? "api/login" : "api/register";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error(
          "Authentication failed. Please check yout current credentials.",
        );
      }

      const data = await response.json();
      console.log(
        `${mode === "login" ? "Login" : "Registration"} successful: `,
        data,
      );
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>{mode === "login" ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {mode === "register" && (
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        {error && <div>{error}</div>}
        <button type="submit" disabled={loading}>
          {loading
            ? mode === "login"
              ? "Signing In..."
              : "Registering"
            : mode === "login"
              ? "Login"
              : "Register"}
        </button>
      </form>
      <p>
        {mode === "login"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        <button onClick={toogleMenu}>
          {mode === "login" ? "Register here:" : "Login here"}
        </button>
      </p>
    </div>
  );
}

export default Auth;
