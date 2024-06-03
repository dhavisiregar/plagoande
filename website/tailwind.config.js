/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDD460",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cursive: ["Poppins", "cursive"],
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
    },
  },
  plugins: [],
};
