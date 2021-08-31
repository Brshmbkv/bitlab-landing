module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
      }
    },
    container: {
      center: true,
      screens: {
        xl: '1152px',
        lg: '1152px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
