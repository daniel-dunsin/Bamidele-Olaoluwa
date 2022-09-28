/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightPink: '#ec5453',
        lightBlue: '#2c98f0',
        lightYellow: '#f9bf3f',
        lightPurple: '#a84cb8',
      }
    },
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    }
  },
  plugins: [],
}
