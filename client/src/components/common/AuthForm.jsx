import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import InputField from "./InputField";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { login, register, loading } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login({
          email: formData.email,
          password: formData.password,
        });
      } else {
        await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }
    } catch (err) {
      console.error("Authentication error", err);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-form-container">
      <p>{isLogin ? "Login" : "Create an Account"}</p>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <InputField
            label="name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        )}
        <InputField
          label="email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {!isLogin && (
          <InputField
            label="confirmPassword"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        )}
        <button type="submit" className="auth-button">
          {loading ? (
            <span>{isLogin ? "Logging in..." : "Creating account..."}</span>
          ) : (
            <span>{isLogin ? "Login" : "Register"}</span>
          )}
        </button>
      </form>
      <div className="auth-switch">
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account"}
          <button
            type="button"
            className="auth-switch-button"
            onClick={toggleAuthMode}
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
