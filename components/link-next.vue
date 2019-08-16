<template>
  <div class="link-next">
    <nuxt-link :to="href">
      <font-awesome-icon icon="arrow-alt-circle-right" />
      {{text}}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    href: String,
    text: String
  }
}
</script>
<style scoped>
.link-next {
  text-align: right;
}
a {
  text-decoration: underline;
  color: #463100;
}
a:hover {
  color: #fd9e00;
}
</style>
