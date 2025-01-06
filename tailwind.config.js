/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-main': '#1f386d',
        'color-secondary': '#fae497',
        'color-fondo': '#fffff6',
        'color-letter': '#706C61',
        'color-1':'#D8D4F2',
        'color-2':'#DB6C79',
        'color-3':'#bbcef3',
        'color-4':'#f7f9f9',
        'color-5':'#202023',
        'color-6':'#FE5F55',
        'color-7':'#35FF69',
        'color-8':'#f7f8fd'
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'concert-one': ['"Concert One"', 'cursive']
      },
    },
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};


