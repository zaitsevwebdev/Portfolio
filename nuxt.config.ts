export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/scss/global/_general.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/global/colors" as *;
            @use "~/assets/scss/global/fonts" as *;
            @use "~/assets/scss/global/mixins" as *;
          `
        }
      }
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  googleFonts: {
    families: {
      'Playfair Display': [600, 700],
      Montserrat: [400, 500, 600, 700, 900]
    },
    download: true,
    inject: true
  },

  eslint: {
    checker: false
  }
})