/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary-black': '#21202A',
        'primary-green': '#00BE69',
        'dark-blue': '#202636',
        'gray': '#363D3D',
        'dark-blue-100': '#282932'
      }
    },
    boxShadow: {
      menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
      booking: '0px 3px 15px 0px rgba(0, 0, 0, 0.1)',
      step: '0px 3px 30px 0px rgba(0, 0, 0, 0.1)'
    },
   
    maxWidth: {
      '10xl': '1680px'
    },
  },
  plugins: [],
}
