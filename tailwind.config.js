/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#818cf8',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        corporea: ['Corporea', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
