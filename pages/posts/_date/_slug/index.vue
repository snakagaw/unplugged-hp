<template>
  <div class="main">
    <span v-html="post.bodyHtml"></span>
  </div>
</template>
<script>
export default {
  // layout: 'page',
  asyncData({ params }) {
    return {
      post: require(`~/output/${params.date}-${params.slug}.json`)
    }
  },
}
</script>
