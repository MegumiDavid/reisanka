/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': {
        100: 'rgba(103, 167, 97, 0.4)',
        200: '#67A761',
        300: '#498D43',
        400: '#45893F',
        600: '#41723E',
      },
      dark: {
        500: 'rgba(18,18,18, 0.4)',
        600: 'rgba(18,18,18, 0.6)',
        900: '#000'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-opensans)'],
        mono: ['var(--font-sofiasans)']
      },
      backgroundImage: {
        'profile': "url('../public/profile.png')",
      },
      transitionDuration: {
        '800': '800ms',
      }
    },
  },
  plugins: [],
}

// 121212 60% => song not selected, playing / search bar
// logo pitch black 40%
// logo primary 100 40%
// logo 
