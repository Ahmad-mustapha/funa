/** @type {import('tailwindcss').Config} */
// const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        chrome: "#4285f4",
        safari: "#ff9800",
        firefox: "#ff5722",
        edge: "#00bcd4",
        other: "#9e9e9e",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

