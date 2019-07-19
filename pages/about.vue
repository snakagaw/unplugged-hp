<script>
export default {
  // layout: 'page',
  asyncData({ params }) {
    return {
      post: require(`~/pages/README.md`)
    }
  }
}
</script>

<template>
  <!-- <div class="content" v-html="$md.render(post)"></div> -->
  <div class="container">
    <!-- <span v-html="$md.render(post.default)"></span> -->

    <span v-html="post.default"></span>
    <button class="btn btn-primary">test</button>
  </div>
</template>
