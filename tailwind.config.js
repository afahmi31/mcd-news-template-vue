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
        primary: "#0EC5D7",
        secondary: "#FEC33C",
        grey: "#868686",
        dark: "#001F22",
      },
      fontFamily: {
        body: ["Darker Grotesque", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        default: ["Darker Grotesque", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        darkerGrotesque: ["Darker Grotesque", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        PlusJakartaSans: ["Plus Jakarta Sans", "Poppins", "sans-serif"],
        firaCode: ["Fira Code", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
        Spartan: ["SpartanMB", "sans-serif"],
        Bricolage: ["Bricolage", "sans-serif"],
      },
      container: {
        container: {
          center: true,
          padding: {
              DEFAULT: "25px",
              md: "40px",
              lg: "80px",
              xl: "120px",
          },
      },
      },
      screens: {
        'sm': '475px',
        'md': '768px',
        'lg': '1197px',
      },
    },
  },
  plugins: [],
};
