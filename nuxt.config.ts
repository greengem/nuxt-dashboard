// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss", 
    "@sidebase/nuxt-auth", 
    "nuxt-icon", 
    "@nuxt/image", 
    "@nuxtjs/google-fonts"
  ],
  googleFonts: {
    families: {
      Poppins: true
    }
  },
  auth: {
    globalAppMiddleware: true,
    provider: {
        type: 'authjs'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
    windyMapApiKey: process.env.WINDY_MAP_API_KEY,
    newsApiKey: process.env.NEWS_API_KEY,
  }
})