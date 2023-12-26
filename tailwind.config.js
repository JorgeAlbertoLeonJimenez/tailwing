/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Primary': '#003459',
        'Secondary': '#fdfdfd',
        'Linear': 'rgb(252,250,213)',
        'Neutral': '#667479'
      }
    },
  },
  plugins: [],
}