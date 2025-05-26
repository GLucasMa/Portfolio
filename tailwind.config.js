/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {colors: {
      Teal: '#39B3AE', 
      Orange: '#FF5733',
      Orangehv: '#aa3d26',
    },},
  },
  plugins: [],
};
