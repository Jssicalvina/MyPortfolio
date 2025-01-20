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
      'white': '#f7f8f6',
      'black': '#151514',
      'black-1': '#272c39',
      'lime': '#d7f266',
      'grey': '#d3ddda',
    },
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [daisyui, scrollbarHide],
  
};

