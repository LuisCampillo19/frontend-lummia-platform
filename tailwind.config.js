export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'lummia-bg': '#151B26',      // Main deep background
        'lummia-slate': '#697C97',   // Muted text and borders
        'lummia-orange': '#F46328',  // Secondary actions
        'lummia-lime': '#46F216',    // Primary neon accents
        'lummia-dark-green': '#18401B' // Subtle backgrounds
      }
    },
  },
  plugins: [],
}