/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#D6632E",
        "secondary": "3B35F3F",
        "tertiary": "#1D1F5F",
        "quaternary": "#D9D9D9",

      }
    },
  },
  plugins: [],
}