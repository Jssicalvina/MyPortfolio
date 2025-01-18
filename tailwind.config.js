import daisyui from 'daisyui';
import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.jsx',
  ],
  theme: {
    fontFamily: {
      leagueSpartan: ["League Spartan", "serif"]
    },
    colors: {
      'lime': '#d7f266',
      'black': '#151514',
      'white': '#f7f8f6',
      'gray': '#d3ddda',
    },
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [ scrollbarHide],
  
};

