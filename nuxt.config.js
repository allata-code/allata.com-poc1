const pkg = require('./package')

module.exports = {
  mode: 'spa',
  head: {
    title: 'Allata',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  loading: { color: '#fff' },
  css: [
    { src: '@/assets/css/main.scss', lang: 'sass' }
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
