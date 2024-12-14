/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue', // If you're using `app.vue` as your main file
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};