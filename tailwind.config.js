/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lummia-dark': '#0b0e14',   // Fondo Dark Mode
        'lummia-sage': '#58A673',   // Verde Salvia (Acentos)
        'lummia-burn': '#D97706',   // Naranja EXP
      },
    },
  },
  plugins: [],
}