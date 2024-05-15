/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,css}"],
  theme: {
    extend: {
      height: {
        '5/6' : '83.3333333%',
        '3/4' : '75%',
      }
    },
  },
  plugins: [],
}

