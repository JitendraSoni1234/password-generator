/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(16,15,21)',
        'light-dark': 'rgb(36,35,42)',
        light: 'rgb(122,120,139)',
        primary: 'rgb(153,255,178)',
      },
    },
  },
  plugins: [],
};
