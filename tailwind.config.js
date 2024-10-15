/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navIcon: '#2E2E2E',
        listNav : '#12B04B',
        garyText : '#4B4B4B',
      },
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
