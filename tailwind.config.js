/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'],
      },
      screens: {
        'max-1920': { max: '1920px' },
        'max-1440': { max: '1440px' },
        'max-1240': { max: '1240px' },
        'max-1024': { max: '1024px' },
        'max-960': { max: '960px' },
        'max-700': { max: '700px' },
        'max-520': { max: '520px' },
      },
      boxShadow: {
        blockShadow: '3px 3px 20px 0 rgba(217, 217, 217, 0.5)',
        smallShadow: '0 1px 4px 0 rgba(26, 15, 1, 0.12)',
        cardGreen: '3px 3px 20px 0 rgba(42, 157, 143, 0.4)',
        cardOrange: '3px 3px 20px 0 rgba(244, 162, 97, 0.4)',
        cardGray: '3px 3px 20px 0 rgba(139, 129, 129, 0.4)',
      },
    },
  },
  plugins: [],
}

