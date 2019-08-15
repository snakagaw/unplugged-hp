// summary.json を読み込む. `yarn run md`が成功していないとエラーを吐く.
const { sourceFileArray } = require('./summary.json');
/* summary.json の, sourceFileArray に, MarkDown ファイルのパス一覧が定義されている.
 * 各パスについて, contents/2019-08-16-hogehoge.md から, /posts/2019-08-16/hogehoge を生成.
 * generateDynamicRoutes という変数にして, generate.routes に渡している.
 */
const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    const regex = /^contents\/(\d{4}-\d+-\d+)-(.+).md$/u
    return `posts/${sourceFileName.toString().replace(regex, "$1/$2").toString()}`;
  });
  callback(null, routes);
};
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/markdownFileToURL.js',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
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
    highlight: function (/*str, lang*/) { return ''; },
  },
  generate: {
    routes: generateDynamicRoutes,
  },
}
