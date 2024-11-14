// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: '#ffffff',
          primary: {
            DEFAULT: '#000000',
            foreground: '#ffffff',
          },
          secondary: {
            DEFAULT: '#000000',
            foreground: '#ffffff',
            100: '#12A150',
            
          },
        },
      },
    },
  })],
};