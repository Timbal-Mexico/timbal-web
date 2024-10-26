// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
'bootstrap/dist/css/bootstrap.css',
'assets/css/web.css',

  ],
  modules: [
    '@vesp/nuxt-fontawesome',
  ],
})
