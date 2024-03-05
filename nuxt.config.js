import allPosts from './plugins/posts/allPosts.js';
import years from './plugins/posts/years.js';
import categories from './plugins/posts/categories.js';

const generateDynamicRoutes = callback => {
  var routes = [];
  allPosts.forEach (post => {
    routes.push (post.url);
  });
  years.years.forEach (year => {
    routes.push ('/years/' + year);
  });
  Object.keys (categories).forEach (function (key) {
    routes.push ('/categories/' + key);
  });
  callback (null, routes);
};

// 設定. デフォのを読み込んでる.
export default defineNuxtConfig ({
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    title: '京大アンプラグド',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '京大, サークル, 軽音, アンプラグド, アコースティック',
      },
      {
        hid: 'twitter-card-type',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter-site-creator',
        name: 'twitter:creator',
        content: '@kyodaiunplugged'
      },
      {
        hid: 'twitter-title',
        name: 'og:title',
        content: '京大アンプラグド'
      },
      {
        hid: 'twitter-description',
        name: 'og:description',
        content: process.env.npm_package_description || '',
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},
  
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {},
  },
  generate: {
    routes: generateDynamicRoutes,
  },
});
