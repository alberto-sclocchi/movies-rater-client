/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.90rem',      // 12px
        sm: '1rem',     // 14px
        base: '30px',       // default 16px → now 18px
        lg: '1.2rem',     // 18px
        xl: '1.25rem',   // 20px
      }
    },
  },
  plugins: [],
}