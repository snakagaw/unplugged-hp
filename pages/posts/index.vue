<template>
  <div class="main">
    <ul>
      <li v-for="(post, key) in posts" :key="key">
        <nuxt-link :to="post.url">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import allPosts from '~/plugins/allPosts.js'
export default {
  data() {
    return {
      posts: allPosts
    }
  }
}
</script>
