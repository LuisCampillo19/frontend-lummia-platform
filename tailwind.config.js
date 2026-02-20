/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lummia-dark': '#0b0e14',   // BG Dark Mode
        'lummia-sage': '#58A673',   // Green saliva (Acentos)
        'lummia-burn': '#D97706',   // Orange EXP
      },
    },
  },
  plugins: [],
}