<template>
  <div class="main">
    <h2>{{$route.params.year}}</h2>
    <div v-for="post in $years.posts[$route.params.year]" :key="post.index">
        <h1>{{ post.title }}</h1>
      <p class="text-right text-secondary">{{ post.date.format('Y年M月D日')}}</p>
      <p>{{ post.summary }}</p>
      <link-next :href="post.url" :text="`「${post.title}」続きを見る`" />
    </div>
  </div>
</template>
<script>
import linkNext from '~/components/link-next.vue'
export default {
  components: {
    linkNext
  }
}
</script>
