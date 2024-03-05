<template>
  <div class="main">
    <h1>会員</h1>
    
    <h2>LiveLog</h2>
    <p>
      <a href="https://livelog.ku-unplugged.net" target="_blank">LiveLog</a>
    </p>
    
    <h2>Zoomail</h2>
    <p>
      <a href="https://message.ku-unplugged.net/player/" target="_blank">Zoomail</a>
    </p>
    
    <h2>twitter</h2>
    <p>
      <a
        href="https://twitter.com/ku_unplugged_hp?ref_src=twsrc%5Etfw"
        class="twitter-follow-button"
        data-size="large"
        data-lang="ja"
        data-show-count="false"
        >Follow @ku_unplugged_hp</a
      >
      <a
        class="twitter-follow-button"
        href="https://twitter.com/kyodaiunplugged"
        data-show-count="false"
        data-lang="ja"
        data-size="large"
      >@kyodaiunpluggedをフォロー</a>
    </p>
  </div>
</template>
<script setup>
useHead({
  script:{
    type: "text/javascript",
    innerHTML: `!(function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0],
          p = 'https'
        if (!d.getElementById(id)) {
          js = d.createElement(s)
          js.id = id
          js.src = p + '://platform.twitter.com/widgets.js'
          fjs.parentNode.insertBefore(js, fjs)
        }
      })(document, 'script', 'twitter-wjs')`,
    tagPriority: 4
  }
})
</script>