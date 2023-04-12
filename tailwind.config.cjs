/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js', './main.js'],
  theme: {
    extend: {
      fontFamily: {
        Inter: 'Inter',
      },
      colors: {
        redLight: '#ff0000',
      },
    },
  },
  plugins: [],
};
