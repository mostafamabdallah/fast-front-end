/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Tajawal",
        secondary: "VEXA",
      },
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "720px",
          lg: "960px",
          xl: "1140px	",
          "2xl": "1140px",
        },
      },
      colors: {
        primary: "#44CE6F",
        background: "#F5F5F5",
        niceGray: "#263238",
        // niceGreen: "#22b07d",
        // niceRed: "#ea5f5f",
        // niceBlue: "#14a4f8",
      },
    },
  },
  plugins: [],
};
