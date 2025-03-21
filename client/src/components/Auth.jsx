import { useState } from "react";
import InputField from "./InputField";

function Auth() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    console.log(formData.name, formData.email, formData.password);
    const endpoint = "/api/register";

    try {
      const response = await fetch(endpoint, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new error(
          "authentication failed. please check yout current credentials.",
        );
      }

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="name"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Auth;
