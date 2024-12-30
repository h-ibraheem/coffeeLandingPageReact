/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        Offwhite: "#D8DBDE",
        mainBrown: "#573111",
        brownLight: "#B48A63",
      },

      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
