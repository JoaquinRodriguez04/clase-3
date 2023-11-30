/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
      'body': '#f1f1ff',
      'blue': '#207fd8',
      'blueHover': '#2968C8',
      'semiBlue': '#E3EDFB',
      'semiBlueHover': '#D9E7FA',
    },
    colors:{
      'gray': '#ACACAC',
      'blue': '#207fd8',
      'black': '#191919',
      'green': '#17AE60',
      'white': '#f1f1ff',
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};

