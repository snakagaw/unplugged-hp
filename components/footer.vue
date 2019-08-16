<template>
  <div class="footer">
    <b-container class="text-center">
      <b-row>
        <b-col md>hogehoge</b-col>
        <b-col md>magemage</b-col>
        <b-col md>foobar</b-col>
      </b-row>©︎ 2019 京大アンプラグド
    </b-container>
  </div>
</template>
<style scoped>
.footer {
  background: url(https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/common/footer_background.gif)
    no-repeat;
  background-size: cover;
}

/* デフォのbootstrap では余計なマージンが設定されており, spで見たときに15px分左右にスクロールできてしまいイラつくので消す. */
.row {
  margin: 0;
}
.col-md {
  padding: 0;
}
</style>
