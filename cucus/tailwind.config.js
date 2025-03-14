
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'bonsai-dark-green': '#1A4234',
        'bonsai-olive': '#4C6B22',
        'bonsai-beige': '#F7EFE5',
        'bonsai-wheat': '#E1C78F',
        'bonsai-brown': '#8B5A2B',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'opensans': ['"Open Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-delay-1': 'fadeIn 1s 0.2s ease-out forwards',
        'fade-in-delay-2': 'fadeIn 1s 0.4s ease-out forwards',
        'fade-in-delay-3': 'fadeIn 1s 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
