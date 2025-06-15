import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 5000,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
