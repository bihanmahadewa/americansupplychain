// Vite
import { defineConfig } from "vite";

// Meta
import path from "path";
import dotenv from "dotenv";

// Plugins
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Environment
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    hmr: {
      host: "localhost",
      port: 5173,
    },
    cors: true,
    proxy: {
      "/geo": "http://asc-server-service:3000",
    },
    watch: {
      usePolling: true,
    },
  },
});
