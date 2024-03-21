import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/Components"),
      "@Pages": path.resolve(__dirname, "src/Pages"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Constants": path.resolve(__dirname, "src/Constants"),
    },
  },
});
