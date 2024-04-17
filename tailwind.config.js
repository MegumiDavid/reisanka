/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',
      /* font: {
        dark: '#0F240F',
        light: '#A2A2A2'
      }, */
      primary: {
        400: '#67A761',
        500: '#468a40',
        600: '#478142',
        700: '#2C472A'
      }
    },
    extend: {}
  },
  plugins: []
}
