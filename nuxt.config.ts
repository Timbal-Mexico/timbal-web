// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Timbal Mexico- Agencia Digital'
    }
  },
  css: [
'bootstrap/dist/css/bootstrap.css',
'assets/css/web.css',

  ],
  modules: [
    '@vesp/nuxt-fontawesome',
  ],
  components: true,
})
