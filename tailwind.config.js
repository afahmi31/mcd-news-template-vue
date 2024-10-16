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
        dateText : '#848484',
        footerBg : '#151515',
        footerText : '#B7B7B7',
        inputFooter : '#2A2929',
        line : '#E2E2E2'
      },
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

