/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',    // Extra small devices (phones)
      'md': '768px',    // Medium devices (tablet)
      'lg': '1024px',   // Large devices (small desktops)
      'xl': '1280px',   // Extra large devices (large desktops)
      '2xl': '1440px',  // 2x Extra large devices (larger screens)
    },
    container: {
      center: true,  // Center container by default
      padding: {
        DEFAULT: '1rem', // Padding default
        sm: '1.5rem',  // Padding for small screens
        md: '2rem',    // Padding for medium screens
        lg: '2.5rem',  // Padding for large screens
        xl: '3rem',    // Padding for extra large screens
      },
    },
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
}

