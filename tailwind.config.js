/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'brandColor': '#FAD02C',
        'secondColor': '#F5F5DC',
        'thirdColor': '#13C97A',
      },
    },
    fontFamily:{
      'Lato': ['Lato', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  
  plugins: [],
}
