/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        peanut: "#78350F",
        egg: "#FEF3C7",
        eggWhite: "#FFFBEB",
        darkBlue: "#0F172A",
      },
      boxShadow: {
        'custom-light': '0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
        'custom-heavy': '0px 25px 50px -12px rgba(255, 255, 255, 0.25)',
      }
    },
  },
  plugins: [],
};
