/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./images/**/*"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit"],
      },
      colors: {
        lightGray: "hsl(212, 45%, 89%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        white: "hsl(0, 0%, 100%)"
      },
    },
  },
  plugins: [],
}