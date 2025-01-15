/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'],
      },
      screens: {
        'max-768': { max: '768px' },
      },
      boxShadow: {
        blockShadow: '3px 3px 20px 0 rgba(217, 217, 217, 0.5)',
      },
    },
  },
  plugins: [],
}

