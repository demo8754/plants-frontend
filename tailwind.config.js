/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      backgroundImage: {
        'hero': " url('./assets/herobg.jpg')",
        'shop': " url('./assets/shop.svg')",
        'about': " url('./assets/bg.jpg')",
      },

      fontFamily: {
        poppins: ['Poppins'], // Replace with your font name
      },




    },
  },
  plugins: [],
}

