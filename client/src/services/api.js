export const loginUser = async (credentials) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: "include",
  });

  if (!response.ok) throw new Error("Login failed");

  return response.json();
};

export const logoutUser = async () => {
  const response = await fetch("/api/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) throw new Error("Logout failed");

  return response.json();
};

export const fetchProductsData = async () => {
  const response = await fetch("/api/products/books", {
    credentials: "include",
  });

  if (!response.ok) throw new Error("Faied to fetch data");

  return response.json();
};
