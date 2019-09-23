import allPosts from './plugins/allPosts.js'
import years from './plugins/years.js'
import categories from './plugins/categories.js'

const generateDynamicRoutes = callback => {
  var routes = []
  allPosts.forEach(post => {
    routes.push(post.url)
  })
  years.years.forEach(year => {
    routes.push('/years/' + year)
  })
  for ([key, value] of categories) {
    routes.push('/categories/' + key)
  }
  callback(null, routes)
}

// 設定. デフォのを読み込んでる.
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '京大アンプラグド',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
  plugins: ['~/plugins/categoriesDI.js', '~/plugins/yearsDI.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/moment',
    'nuxt-fontawesome'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  markdownit: {
    preset: 'default',
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    xhtmlOut: true,
    langPrefix: 'language-',
    quotes: '“”‘’',
    highlight: function(/*str, lang*/) {
      return ''
    }
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  moment: {
    locales: ['ja']
  },
  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    routes: [
      '/page/1',
      {
        url: '/page/2',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      }
    ]
  },
  generate: {
    routes: generateDynamicRoutes
  }
}
