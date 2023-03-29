<template>
  <div class="link-next">
    <nuxt-link :to="href">
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
</style>
