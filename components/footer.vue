<template>
  <div class="footer">
    <b-container class="text-center">
      <b-row>
        <b-col>©︎ 2023 京大アンプラグド</b-col>
      </b-row>
    </b-container>
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
<script>
import allPosts from '~/plugins/allPosts.js'
export default {
  data: function() {
    return {
      allPosts: allPosts,
      selectedYear: null
    }
  },
  watch: {
    selectedYear(value) {
      if (value !== null) {
        this.$router.push('/years/' + value)
        this.selectedYear = null
      }
    }
  }
}
</script>
