/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'luxury-gold': '#B8860B',
        'luxury-black': '#1A1A1A',
        'luxury-white': '#F5F5F5',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-in': 'slideIn 1s ease-out',
      },
    },
  },
  plugins: [],
}
