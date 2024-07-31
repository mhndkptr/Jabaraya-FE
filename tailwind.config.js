// tailwind.config.js
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        jabarayaColors: {
          50: "#ecf5ff",
          100: "#c4e1ff",
          200: "#a8d2ff",
          300: "#80beff",
          400: "#68b1ff",
          500: "#429eff",
          600: "#3c90e8",
          700: "#2f70b5",
          800: "#24578c",
          900: "#1c426b",
        },
      },
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        "loginRegister-gradient":
          "linear-gradient(to bottom, #3C90E8, #1D1DA0)",
      },
    },
  },
  plugins: [require("tailwindcss-gradients"), flowbite.plugin()],
};
