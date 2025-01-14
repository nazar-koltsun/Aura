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
    },
  },
  plugins: [],
}

