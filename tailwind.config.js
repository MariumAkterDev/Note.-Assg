/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily:{
      'Lato': ['Lato', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {},
      colors: {
        'brandColor': '#FAD02C',
        'secondColor': '#F5F5DC',
      }
  },
  
  plugins: [],
}
