/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainblack': '#333',
        'verosblue': '#00384F',
        'verosheader': '#00A2B3',
        'whitetext': '#CCC'
      }
    },
  },
  plugins: [],
}
