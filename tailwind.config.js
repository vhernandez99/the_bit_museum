module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: {
          100: "#4d1354",
        },
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
        open_sans: ["Open-Sans","sans-serif"]
       
      },
    },
  },
  plugins: [],
};
