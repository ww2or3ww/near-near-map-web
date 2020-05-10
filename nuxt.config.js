import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: 'にゃーにゃーマップ',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'にゃーにゃマップ'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://near-near-map.w2or3w.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'にゃーにゃーマップ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Stay NEAR, Safe NEAR ♪'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://near-near-map.s3-ap-northeast-1.amazonaws.com/images/resources/ogpimg.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue2-google-maps.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-166062268-1'
      }
    ],
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_and_default',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        },
        defaultLocale: 'ja',
        vueI18n: {
          fallbackLocale: 'ja'
        },
        lazy: true,
        langDir: 'assets/locales/',
        locales: [
          {
            code: 'ja',
            name: '日本語',
            iso: 'ja_JP',
            file: 'ja.json'
          },
          {
            code: 'en',
            name: 'English',
            iso: 'en-US',
            file: 'en.json'
          },
          {
            code: 'ja-basic',
            name: 'やさしいにほんご',
            iso: 'ja-JP',
            file: 'ja-basic.json'
          }
        ],
        vueI18nLoader: true
      }
    ]
  ],
  manifest: {
    name: 'にゃーにゃーマップ',
    description: 'Stay NEAR, Safe NEAR ♪',
    theme_color: '#2300a0',
    background_color: '#000000',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    splash_pages: null
  },
  pwa: {
    icon: {
      iconSrc: 'static/img/pwaicon.png'
    }
  },
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    vendor: ['vue2-google-maps'],
    transpile: [/^vue2-google-maps($|\/)/]
  }
}
