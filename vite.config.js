import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  outDir: "build", // This tells Vite where to output the build
  base: "/", // Ensures correct asset resolution, useful for root deployment
});
