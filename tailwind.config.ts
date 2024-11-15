// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // Add your app files
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  // Add your component files
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: "#9353D3",
          200: "#17C964",
          300: "#FFFFFF",
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};