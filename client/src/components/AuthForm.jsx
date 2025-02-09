import { useState } from "react";
import "./AuthForm.css";

const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState("true");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
    }

    if (!isSignIn) {
      if (!formData.name) {
        tempErrors.name = "Name is required";
      }
      if (!formData.confirmPassword) {
        tempErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        tempErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    if (validateForm()) {
      // handle form submission
      console.log("Form validation works");
      console.log(formData);
    }
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    });
    setErrors({});
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? "error" : ""}
            />

            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          {!isSignIn && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={errors.confirmPassword ? "error" : ""}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          )}
          <button type="submit" className="submit-button">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p className="toogle-mode" onClick={toggleMode}>
          {isSignIn
            ? "Don't have an acccount? Sign Up"
            : "Already have an acccount? Sign In"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
