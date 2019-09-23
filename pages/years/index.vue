<template>
  <div class="main">
    <div v-for="year in $years.years" :key="year">
      <h2>
        <nuxt-link :to="`/years/${year}`">{{year}}</nuxt-link>
      </h2>
      <ul>
        <li v-for="post in $years.posts[year].slice(0, 3)" :key="post.date">
          <nuxt-link :to="post.url">{{ post.title }}</nuxt-link>
        </li>
      </ul>
      <p v-if="$years.posts[year][4]">...</p>
    </div>
  </div>
</template>
