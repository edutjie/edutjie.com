/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        'r-flex': ['R-Flex Regular', 'sans-serif'],
        bold: ['R-Flex Bold', 'sans-serif'],
      },
      colors: {
        primary: '#01162D',
        secondary: '#95F9C3',
      },
    },
  },
  plugins: [],
}
