import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'one': 'rgb(89, 41, 65)',
      'two': 'rgb(73, 132, 103)',
      'three': 'rgb(82, 183, 136)',
      'four': 'rgb(32, 42, 37)',
      'five': 'rgb(134, 165, 217)'
    },
    extend: {
      dropShadow: {
        "xl": "0 5px 5px rgb(32, 37, 47, 0.5)",
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}
