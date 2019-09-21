<template>
  <div class="main">
    <h2>{{$route.params.category}}</h2>
    <ul>
      <li v-for="(post, key) in $categories[$route.params.category]" :key="key">
        <nuxt-link :to="post.url">
          {{ post.title }}
          <i class="text-secondary">{{ $extractDate(post.url).format('Y-m-d') }}</i>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
