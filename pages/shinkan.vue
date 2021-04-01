<template>
  <div class="main">
    <h1>新歓特設ページ</h1>
    <p>
      2021年度、前期の新歓の詳細については、コロナウイルス流行の影響により、対面またはZoomで交流会を行います！<br>
      細かい日時は下のビラで見てみてください！<br>
      対面かZoomのどちらかで行うかは，前日までにこのHPまたはtwitterでお知らせします！<br>
      4/12の交流会は【Zoom】で行います。
    </p>
    <ul>
      <li>2020/4/15 <nuxt-link to="/movie">動画ページ</nuxt-link>を公開しました</li>
    </ul>
    <h2>新歓ビラ2020</h2>
    <img src="/uploads/2021_flyer.pdf" alt="" title="新歓ビラ2021" class="img-fluid" />
    <p>
      2021年度のビラです！配布はしてますが，こちらで見てもOK！<br>
      新歓を対面で行うかzoomで行うかは，<br>
      随時変更をtwitterやHPで確認してください！！<br>
      （ビラの内容は2021/4/1現在のものです）<br>
    </p>
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
