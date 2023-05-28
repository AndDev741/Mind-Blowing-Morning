/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "481px",
      md: "769px",
      lg: "993px",
      xl: "1281px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        lightGray: "#5C5C5C",
        primaryOrange: "#F47D31",
      },
      fontFamily:{
        mainFont:"var(--font-raleway)"
      }
    },
  },
  plugins: [],
};
