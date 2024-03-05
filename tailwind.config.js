/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#7047eb',
        green: '#5ff2c6',
        pink: '#ff6c71',
        darkPurple: '#393978',
        button: '#7844ec'
      },
    },
  },
  plugins: [],
}

