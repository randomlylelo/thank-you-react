module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Extend
    extend: {
      // Extend Colors
      colors: {
        'background': '#666666',
      },
      // Extend font families bc I don't wanna override them incase we need em.
      fontFamily: {
        'custom': ['Arial','Helvetica','sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
