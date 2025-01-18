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
    extend: {},
  },
  plugins: [daisyui, scrollbarHide],
  daisyui: {
    theme: ['sunset']
  }
};

