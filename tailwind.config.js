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
        'max-1024': { max: '1024px' },
        'max-960': { max: '960px' },
        'max-620': { max: '620px' },
      },
      boxShadow: {
        blockShadow: '3px 3px 20px 0 rgba(217, 217, 217, 0.5)',
        smallShadow: '0 1px 4px 0 rgba(26, 15, 1, 0.12)',
      },
    },
  },
  plugins: [],
}

