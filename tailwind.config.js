/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('https://www.tomya.com/assets/img/subpages/sub/aboutus-banner-icons.svg')"
      },
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px",
        }
      },
      colors: {
        primary: "#5952E4",
        secondary: "#EEEFF6"
      }
    },
  },
  plugins: [],
}

