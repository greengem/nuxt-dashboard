// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // Existing API key
    openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
    windyMapApiKey: process.env.WINDY_MAP_API_KEY,
  },
})
