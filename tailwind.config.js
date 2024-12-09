/** @type {import('tailwindcss').Config} */

export default {
  darkMode:'class',
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
        'thirdColor': '#13C97A',
      }
  },
  
  plugins: [],
}
