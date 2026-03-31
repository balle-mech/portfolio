import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  publicDir: "../public",
  base: process.env.VITE_BASE_PATH || "/portfolio/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    open: false,
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
});
