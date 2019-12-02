<template>
  <div class="main">
    <div v-for="(value, key) in $categories" :key="key">
      <h2>
        <nuxt-link :to="`/categories/${key}`">{{key}}</nuxt-link>
      </h2>
      <ul>
        <li v-for="(post, key) in value.slice(0, 3)" :key="key">
          <nuxt-link :to="post.url">
          {{ post.title }}
          </nuxt-link>
        </li>
      </ul>
      <p v-if="value[4]">
          ...
        </p>
    </div>
  </div>
</template>
