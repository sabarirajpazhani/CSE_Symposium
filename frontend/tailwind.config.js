/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(173, 216, 230, 0.7) 0px 0px 10px, rgba(255, 0, 0, 0.7) 0px 0px 5px, rgba(173, 216, 230, 0.7) 0px 0px 5px, rgba(255, 0, 0, 0.7) 0px 0px 10px',
      },
    },
  },
  plugins: [],
}

