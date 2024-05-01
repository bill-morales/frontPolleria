/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'londri': ['Londrina Solid'],
      'karla': ['Karla', 'sans-serif']
    },
  },
  plugins: [],
}

