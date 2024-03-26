import FlowbitePlugin from "flowbite/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      brand: {
        green: { 100: "#19593B", 200: "#2E8C3C" },
        brown: { 100: "#F2E7C4", 200: "##8C5E07" },
        gray: { 100: "#F2F2F2" },
      },
    },
    extend: {},
  },
  plugins: [FlowbitePlugin],
};
