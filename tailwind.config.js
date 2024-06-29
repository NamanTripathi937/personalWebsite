/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '8000ms',
      },
      fontFamily:{
        playwrite: "Playwrite NZ",
      },
      colors:{
        naman : '#1b1b1b',
      }
    },
  },
  plugins: [],
}

