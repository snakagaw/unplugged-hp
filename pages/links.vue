<template>
  <div class="main">
    <h1>リンク</h1>
    <ul>
      <li v-for="(link, key) in links" :key="key">
        <a :href="link.url" target="_blank">{{link.name}}</a>
        {{ link.description }}
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
