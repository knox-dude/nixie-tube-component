/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        "chocolate": ['TT Chocolates', "sans-serif"]
      }
    },
  },
  plugins: [],
}

