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
        listNav : '#3E86DD',
        garyText : '#4B4B4B',
        dateText : '#848484',
        footerBg : '#151515',
        footerText : '#B7B7B7',
        inputFooter : '#2A2929',
        line : '#E2E2E2',
        categoryText : '#8B919E'
      },
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

