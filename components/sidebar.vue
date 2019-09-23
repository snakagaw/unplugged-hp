<template>
  <div class="sidebar">
    <ul>
      <li class="sidebar-item">
        <h3>最近の活動</h3>
        <div class="textwidget">
          今日(8月17日)の例会教室は
          <br />
          <b>4共31</b> です
          <br />
          <br />
          <nuxt-link :to="allPosts[0].url">{{allPosts[0].title}}</nuxt-link>
        </div>
      </li>
      <li class="sidebar-item">
        <h3>twitter</h3>
        <div>
          <a
            class="twitter-timeline"
            data-height="400"
            data-theme="light"
            href="https://twitter.com/kyodaiunplugged?ref_src=twsrc%5Etfw"
          >Tweets by kyodaiunplugged</a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </li>
      <li class="sidebar-item">
        <h3>ブログカテゴリー</h3>
        <div>
          <ul class="list">
            <li v-for="(posts, category) in $categories" :key="posts.length">
              <nuxt-link :to="`/categories/${category}`">{{category}}</nuxt-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.sidebar-item {
  list-style: none;
}
ul {
  padding: 0px;
}
.sidebar h3 {
  margin-top: 20px;
  margin-bottom: 0px;
  padding: 2px 8px;
  background-color: #ffffdd;
  border: 3px solid #ffeeaa;
  color: #463100;
  font-size: 1.3em;
  font-weight: bold;
}
.sidebar div {
  margin-left: 1px;
  margin-right: 1px;
  padding: 16px;
  border-left: 1px solid #000000;
  border-bottom: 1px solid #000000;
  border-right: 1px solid #000000;
}
.list {
  padding-left: 20px;
}
</style>
<script>
import allPosts from '~/plugins/allPosts.js'
export default {
  data: function() {
    return {
      allPosts: allPosts,
      selectedYear: null
    }
  }
}
</script>
