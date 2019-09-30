# このフォルダについて

この中のファイル/フォルダが, ホームページのページに対応します.

例えば, `members.vue` は, `https://ku-unplugged.net/members/` に, `about`フォルダの中の `what_is_unplugged.vue` は, `https://ku-unplugged.net/about/what_is_unplugged/` に対応します. 

あと, `about`フォルダの`index.vue`は, `https:ku-unplugged.net/about/` に対応します. デフォルーティングみたいな.

右上の編集ボタンで書き換え可能です. 


# vue ファイルについて
`vue.js` というフレームワークを使っています. 構成を整えないといけないので面倒ですが, 更新なら**htmlが書ければ十分**です.簡単. 

基本htmlと一緒ですが, 

## リンク
内部リンクは, `<nuxt-link :to="/リンクの場所/">文字</nuxt-link>` ,という風に書きます(高速化のため).

`<nuxt-link :to="/members/">メンバーページに飛ぶよ</nuxt-link>`は `<a href="/members/">メンバーページに飛ぶよ</a>`, 

`<nuxt-link :to="/posts/2012-03-09/release">最初の投稿だよ!</nuxt-link>`は, `<a href="/posts/2012-03-09/release">最初の投稿だよ!</a>`に飛びます. 



ちなみに, href=とか :to= の中身は, **ルート相対パス** と呼ばれている書き方です. `https://ku-unplugged.net//`を省略しただけ, みたいな. まぁ他のところを参照すれば大体わかります. 

もちろん, 外部リンクは `<a href="...` でOK.


## ファイルアップロード
TODO:URL貼る ここ にアップロードしてください. 

`2012-ohanami-img02.jpg` をアップロードしたら,`<img src="/uploads/2012-ohanami-img02.jpg" alt="お花見2012img02" title="2012-ohanami-img02" class="alignnone size-full wp-image-260" width="400" />` みたいな書き方で大丈夫. pdfとかもOK. ただ，内部向けはhttps://kmessage.ku-unplugged.net の使用を検討した方が良いかも. 

## 記事の追加
じゃぁ, `post`フォルダにはブログ投稿が入ってるんだね! ってなるはずなんですが, ブログはmarkdownで書きたかったので, TODO:リンク ここにまとめてあります. 書き方は随時参照してください. `post/`以下は, markdownファイルを元に自動でブログページを生成するプログラムが埋めてあるので, 下手に触らない方宇賀良いいです. 
