/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        bs_blue: '#094793',
        bs_red: '#CF1B1B',
        bs_darkGrey: '#5E717B',
        bs_lightGrey: '#f4f7f9',
        bs_darkBlue: '#094793',
        bs_lightBlue: '#cde1ec'
      }
    },
    container: {
      padding: '2rem',
      center: true,
    },
  },
  plugins: []
}
