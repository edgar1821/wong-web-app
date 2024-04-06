import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// "https://edgar1821.github.io/wong-web-app",
export default defineConfig({
  plugins: [react()],
  base: "https://edgar1821.github.io/wong-web-app",
  define: {
    global: "window",
  },
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/Components"),
      "@Pages": path.resolve(__dirname, "src/Pages"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Constants": path.resolve(__dirname, "src/Constants"),
      "@Types": path.resolve(__dirname, "src/Types"),
    },
  },
});
