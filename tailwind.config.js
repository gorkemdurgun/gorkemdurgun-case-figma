/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        lg: "80px",
      },
      screens: {
        lg: "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        peanut: "#78350F",
        egg: "#FEF3C7",
        eggWhite: "#FFFBEB",
        lightCream: "#FFFEF9",
        darkBlue: "#0F172A",
        logoGray: "#475569",
        red: "#E11D48",
        yellow: "#FBBF24",
        green: "#22C55E",
        linkWhite: "#E2E8F0",
        blackRgba: "rgba(18, 22, 25, 0.75)",
      },
      boxShadow: {
        lighter: "0px 0px 15px 0px rgba(255, 255, 255, 0.07)",
        light: "0px 25px 50px -12px rgba(255, 255, 255, 0.25)",
        "combine-lights": "0px 25px 50px -12px rgba(255, 255, 255, 0.25), 0px 0px 15px 0px rgba(255, 255, 255, 0.07)",
        "dark-m": "0px 0px 4px 0px #00000012",
        "darker-m": "0px 4px 6px -1px #0000001A",
        "combine-darks-m": "0px 0px 4px 0px #00000012, 0px 4px 6px -1px #0000001A",
        "dark-l": "0px 0px 6px 0px #00000012",
        "darker-l": "0px 10px 15px -3px #0000001A",
        "combine-darks-l": "0px 0px 6px 0px #00000012, 0px 10px 15px -3px #0000001A",
        "dark-xl": "0px 0px 10px 0px #00000012",
        "darker-xl": "0px 20px 25px -5px #0000001A",
        "combine-darks-xl": "0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A",
        "dark-xxl": "0px 0px 15px 0px #00000012",
        "darker-xxl": "0px 25px 50px -12px #00000040",
        "combine-darks-xxl": "0px 0px 15px 0px #00000012, 0px 25px 50px -12px #00000040",
      },
    },
  },
  plugins: [],
};
