<template>
  <div class="link-next">
    <nuxt-link :to="href">
      <font-awesome-icon icon="arrow-alt-circle-right"　size="lg" />
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
