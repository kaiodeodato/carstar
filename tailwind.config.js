/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      height:{
        '96a':'30rem',
        '97':'50rem'
      },
      width:{
        '97':'30rem',
        '98':'40rem',
        '99':'50rem',
        '101':'110rem',
 
      }
    },
  },
  plugins: [],
}

