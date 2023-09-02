/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.js',
    './main.js',
    './node_modules/flowbite/**/*.js',
  ],
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
  plugins: [require('flowbite/plugin')],
};
