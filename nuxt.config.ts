import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  vite: {
    plugins: [
      eslintPlugin({
        failOnError: false
        // cache: false,
      })
    ],
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/styles/_colors.sass" as *\n'
        }
      }
    }
  },
  css: ['~/assets/styles/main.sass'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
