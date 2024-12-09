/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#34495E', 
        'light': '#F8F9F9',
        'secondary-light': '#BDC3C7',
        'accent': '#E74C3C',
        'primary-dark': '#1C2833', 
        'dark': '#121212', 
        'secondary-dark': '#2F363D'
      }
    },
  },
  plugins: [],
}