/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        HBCgray : '#2D2424',
        HBCbrown : '#5C3D2E',
        HBCLightBrown : '#875841',
        HBCpeach : '#B85C38',
        HBCoffwhite : '#E0C097',
      }
    },
  },
  plugins: [],
}