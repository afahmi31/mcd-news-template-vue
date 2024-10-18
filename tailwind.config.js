/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
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
      Bricolage: ["Bricolage Grotesque", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "25px",
        md: "80px",
        lg: "80px",
        lg2: "80px",
        xl: "120px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      lg2: "1365px",
      xl: "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        primary: "#0EC5D7",
        secondary: "#FEC33C",
        grey: "#868686",
        dark: "#001F22",
      },
    },
  },
  plugins: [],
};
