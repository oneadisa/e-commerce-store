module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        "light-blue" : "rgba(245, 248, 255, 1)",
        "Dark-blue" : "rgba(5, 43, 150, 1)",
        "medium-blue" : "rgba(5, 49, 173, 1)",
        "faded-blue" : "rgba(128, 158, 242, 1)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
