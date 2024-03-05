<template>
  <div class="footer">
    <div class="container text-center">
      <div class="row">
        <div calss="col">©︎ 2023 京大アンプラグド</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  background: url('~assets/images/footer-background.gif') no-repeat;
  background-size: cover;
}

h3 {
  margin: 10px;
  border-bottom: 2px dotted #463100;
  font-family: 'ＭＳ Ｐ明朝', serif;
  font-size: 1em;
  font-weight: bold;
}
a {
  margin: 15px;
}
select {
  margin: 15px;
}
ul a {
  margin-left: 0px;
  padding-left: 0px;
}

/* デフォのbootstrap では余計なマージンが設定されており, spで見たときに15px分左右にスクロールできてしまいイラつくので消す. */
.row {
  margin: 0;
}
.col-md {
  padding: 0;
}
</style>
<script setup>
</script>
