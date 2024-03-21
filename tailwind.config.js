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
        green: { 100: "#038b3f" },
      },
    },
    extend: {},
  },
  plugins: [FlowbitePlugin],
};
