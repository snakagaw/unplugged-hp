<template>
  <div class="main">
    <ul>
      <li v-for="(post, key) in posts.fileMap" :key="key">
        <nuxt-link :to='$markdownFileToURL(post.sourceBase)'>{{ post.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import posts from '~/summary.json'
export default {
  data() {
    return {
      posts: posts
    }
  }
}
</script>
