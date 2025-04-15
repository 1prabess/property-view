/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./myapp/templates/myapp/**/*.html",
    // Add paths to other apps if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"], // Add 'Roboto' to the font family list
      },
    },
  },
  plugins: [],
};
