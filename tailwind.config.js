/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
			padding: '1rem'
    },
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
        bg: colors.gray
      },
      fontFamily: {
        sans: ['Droid Arabic Kufi', 'sans-serif']
      }
    }
  },
  plugins: []
}
