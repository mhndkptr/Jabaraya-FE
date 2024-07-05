/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    },
  },
  plugins: [],
};
