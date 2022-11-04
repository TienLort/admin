import { defineNuxtConfig } from "nuxt";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    build: {
      extractCSS: false,
      transpile: ["vuetify"],
    },    
    css: ["@/assets/scss/style.scss",
    'bootstrap/dist/css/bootstrap.css'],
    vite: {
      define: {
        "process.env.DEBUG": false,
      },
    },

    modules: [
      '@vueuse/nuxt',
      'bootstrap-vue-3/nuxt',
    ],
    meta: {
      title: process.env.APP_NAME || '',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: process.env.APP_NAME || ''},
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: `${(process.env.NUXT_APP_BASE_URL || '/')}logo.svg`},
      ],
    },
    runtimeConfig: {
      public: {
        apiBase: process.env.API_BASE || '/',
      },
    },
})
