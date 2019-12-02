<template>
  <div class="main">
    <h1>サークル紹介</h1>
    <h2>“アンプラグド”とは</h2>
    <p>
      サークル名の「アンプラグド」とはそもそもどういう意味なのか。
      <br />このサークルが創設された理由から目的までを説明します。
      <link-next href="/about/what_is_unplugged/" text="“アンプラグド”とは" />
    </p>
    <h2>活動紹介</h2>
    <p>
      京大アンプラグドがいつ、どこで、どんなふうに活動しているのか。
      <br />例会、ライブ、その他イベントについて説明します。
      <link-next href="/about/activities/" text='活動紹介' />
    </p>
    <h2>入会するには</h2>
    <p>
      京大アンプラグドに入会するにはどうすればいいのか。
      <br />どういうメンバーがアンプラグドに入っているのか説明します。
      <link-next href="/about/membership" text="入会するには" />
    </p>
  </div>
</template>
<script>
// <link-next href="url..." text="もじ..." /> で, <a href="url...">→もじ...</a> を生成する.(矢印はfontawesomeのやつ)
// 実際には, nuxt-link を呼び出しているためサイト内遷移は爆速.
import linkNext from '~/components/link-next.vue'
export default {
  components: {
    linkNext
  }
}
</script>
