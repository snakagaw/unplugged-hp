<template>
  <div class="main">
    <h1>リンク</h1>
    <ul class="links">
      <li v-for="(link, key) in links" :key="key">
        <h3>
          <a :href="link.url" target="_blank">{{ link.name }}</a>
        </h3>
        <div>
          {{ link.description }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import links from '~/contents/links.json'
export default {
  data() {
    return {
      links: links
    }
  }
}
</script>
<style scoped>
.links {
  list-style: none;
}
ul {
  padding: 0px;
}
.links h3 {
  margin-top: 20px;
  margin-bottom: 0px;
  padding: 2px 8px;
  background-color: #ffffdd;
  border: 3px solid #ffeeaa;
  color: #463100;
  font-size: 1.3em;
  font-weight: bold;
}
.links div {
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
