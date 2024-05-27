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
        'lighter': '0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
        'light': '0px 25px 50px -12px rgba(255, 255, 255, 0.25)',
        'combine-lights': '0px 25px 50px -12px rgba(255, 255, 255, 0.25), 0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
        'dark': '0px 0px 10px 0px #00000012',
        'darker': '0px 20px 25px -5px #0000001A',
        'combine-darks': '0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A',
      }
    },
  },
  plugins: [],
};
