<template>
  <div class="main">
    <h1>新歓特設ページ</h1>
    <h2>2022年度の新歓について</h2>
    <p>
      2022年度の新歓はTwitterやLINEのオープンチャットを用いて連絡しています！<br>
      オープンチャットに参加の場合は<a href="https://docs.google.com/forms/d/1fIuueKW7MYjuA-HD2DdwTfMOkuQAwy4V0sxf2zegL08/viewform?edit_requested=true">ここ</a>から！<br>
      Twitterの質問箱でも質問を募集しています！連絡をお待ちしています！
    </p>
    
    <h2>新歓ビラ2022</h2>
    <img src="/uploads/2022_flyer_1.jpeg" alt="" title="新歓ビラ2022" class="img-fluid" />
    <img src="/uploads/2022_flyer_2.jpeg" alt="" title="新歓ビラ2022" class="img-fluid" />
    <h2>ライブ動画</h2>
    <p>
      お待たせしました！<br>
      アンプラで行われたライブのうち、いくつかを公開します！<br>
      動画ページは<nuxt-link to="/movie">こちら</nuxt-link>！<br>
    </p>
    <h2>そのほか</h2>
    <p>
      お問い合わせの方は<a href="mailto:info@ku-unplugged.net">メール(info@ku-unplugged.net)</a><br>
      <br>
      又はtwitter[DM] までお気軽に連絡して下さい!<br>
      <a
        class="twitter-follow-button"
        href="https://twitter.com/kyodaiunplugged"
        data-show-count="false"
        data-lang="ja"
        data-size="large"
      >@kyodaiunpluggedをフォロー</a>

    </p>
      <script>
      !(function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0],
          p = /^http:/.test(d.location) ? 'http' : 'https'
        if (!d.getElementById(id)) {
          js = d.createElement(s)
          js.id = id
          js.src = p + '://platform.twitter.com/widgets.js'
          fjs.parentNode.insertBefore(js, fjs)
        }
      })(document, 'script', 'twitter-wjs')
      </script>
  </div>
</template>
