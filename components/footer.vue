<template>
  <div class="footer">
    <b-container class>
      <b-row>
        <b-col md>
          <h3>最近のブログ投稿</h3>
          <ul>
            <li>
              <nuxt-link :to="allPosts[0].url">{{allPosts[0].title}}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="allPosts[1].url">{{allPosts[1].title}}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="allPosts[2].url">{{allPosts[2].title}}</nuxt-link>
            </li>
          </ul>
        </b-col>
        <b-col md>
          <h3>ブログ年別アーカイブ</h3>
          <select v-model="selectedYear">
            <option :value="null" selected="selected">年を選択</option>
            <option v-for="year in $years.years" :key="year" :value="year">{{ year }}</option>
          </select>
        </b-col>
        <b-col md>
          <h3>検索</h3>
          <n-link to="/search/">検索はこちら</n-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="text-center">
      <b-row>
        <b-col>©︎ 2019 京大アンプラグド</b-col>
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
