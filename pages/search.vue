<template>
  <div class="main">
    <h1>検索</h1>
    <input v-model="str" placeholder="検索語を入力..." />
    <p v-if="!str">投稿のタイトル, 本文を検索できます</p>
    <ul v-if="searchResult.length > 0 && str">
      <li v-for="(post, key) in searchResult" :key="key">
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
      posts: allPosts,
      str: ''
    }
  },
  computed: {
    searchResult() {
      return this.posts.filter(post => {
        return post.title.match(this.str) || post.text.match(this.str)
      })
    }
  }
}
</script>
