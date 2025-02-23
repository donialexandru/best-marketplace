import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  server: {
    proxy: {
      "/user": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/api/products/books": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  plugins: [TanStackRouterVite(), react()],
});
