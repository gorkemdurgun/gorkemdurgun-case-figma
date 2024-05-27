/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Roboto Flex", "sans-serif"],
      },
      fontSize: {
        // "heading1": "72px",
        // "heading2": "56px",
        // "heading3": "48px",
        // "heading4": "40px",
        // "heading5": "32px",
        // "heading6": "24px",
        // "body-s": "14px",
        // "subtitle": "16px",
      },
      colors: {
        "peanut": "#78350F",
      },
    },
  },
  plugins: [],
}

