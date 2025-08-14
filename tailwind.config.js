/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'chathams-blue': '#154563',
        'chathams-blue-dark': '#103747',
        'chathams-blue-light': '#5B7C91',
        'chathams-blue-lighter': '#D0D9DF',
        'chathams-blue-lightest': '#E7ECEF',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'gelasio': ['Gelasio', 'serif'],
      },
    },
  },
  plugins: [],
}
