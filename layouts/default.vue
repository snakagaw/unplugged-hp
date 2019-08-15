<template>
  <div class="container">
    <unplugged_header />
    <nuxt />
  </div>
</template>
<script>
import unplugged_header from '~/components/header.vue'

export default {
  components: {
    unplugged_header
  }
}
</script>
<style>
h1 {
  /* clear: both; */
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 35px;
  padding-bottom: 10px;
  border-bottom: 3px dotted #fd9e00;
  background: url(https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/icon/icon_arrow1.gif)
    left top no-repeat;
  color: #463100;
  font-size: 1.6em;
  /* letter-spacing: 0.25em; */
  /* font-weight: bold; */
}
h2 {
  clear: both;
  margin: 0 -10px 14px -10px;
  margin-bottom: 14px;
  margin-bottom: 14px;
  padding: 10px 10px 10px 22px;
  background: none;
  border-left: 10px solid #fd9e00;
  border-bottom: 1px solid #ffeeaa;
  font-size: 1.286em;
  font-weight: bold;
}
</style>
