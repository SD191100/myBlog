/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#171717',
        'text-primary': '#D4D4D4',
        'text-secondary': '#A3A3A3',
      }
    },
  },
  plugins: [],
}