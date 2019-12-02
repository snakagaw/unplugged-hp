# Kyodai Unplugged&#39;s Home Page

## How To Write

### はじめに

お仕事お疲れ様です. 2016 年入会中川です! Wordpress 嫌になって移行しました. サーバー構成の関係でセキュリティ面で強く, 一生アプデしなくていいはずです. あとスマホ対応もしました. 歴史的な経緯を盛り込んでおくと, 2012 年に三吉さんが旧 HP(html 手打ち)から`wordpress`に移行, 2019 年に`nuxt`に移行です 🎉

管理を簡単に(といってちょっと面倒にはなっていますが, データ消失のリスクに備えるとかいう手間も一緒に減らしてるので勘弁してください...), 運営を堅実にかつ体制を柔軟に, 見やすくいサイト(スマホ対応が急務でしたね...), 個人情報とか GDPR とかしっかり, を目標に移行しました(URL 変わってないので引越しではないです). まぁこれなんとかしてくれとかあったら気軽に連絡してください~

### 記事の追加方法

- 今まで通り web(github だけど...)でできます!
- `markdown` 使えるので楽です! (markdown の書き方は![ここ](https://qiita.com/tbpgr/items/989c6badefff69377da7)とか参考にしてください. html の 10000 倍は楽です.
- @つよいひと もちろん, `git clone`して好きなエディタで書いても大丈夫です.
- ファイルアップロードとかも対応してます
- ちょっと手順慣れはいるのでご勘弁を...

### 固定ページの編集
https://github.com/snakagaw/unplugged-hp/tree/master/pages
でできます. 簡単な取説載せてるので随時.

### ブログの投稿

1. github 上で [contents](https://github.com/snakagaw/unplugged-hp/tree/master/contents)に行きます.
2. 編集なら, 目的のページ(紹介ならTODO:リンク  とか)を押して右上の鉛筆マーク(edit this file)を押します.<br>新規作成なら, `Create new file` を押して, `年-月-日-タイトル.md` のファイルを作ります. 例えば, `2019-10-01-後期始まる` とか. タイトルには任意の文字が使えます. うれしい. 
3. 書き換えます. Preview changes で, markdown の状態がわかります. 便利. 新規の場合, 行頭に, 
---
category: ライブ
---
# 卒業ライブ 2012```
```
を付与してください. カテゴリは, `ライブ`, `イベント`, `お知らせ` がありますが, 増やしたければどうぞ. 増やさない方が良いと思うけど. <br>
`# 卒業ライブ 2012` の部分ですが, **#** は, `<h1>`(タイトル)を表します. **#**# の後に半角スペースは必須です. 
4. 下の方に行って, Commit changes を記入します

   1. テンプレ通りでいいです. *ぶろぐとーこー*とか簡単で. 「かいちょーに言われて嫌々書いた」とかでも全然良いと思います.
   2. `commit directory to the master branch`を選んじゃって大丈夫です. 気になる人は PR 立ててください.
   3. `Commit changes`を押します.

5. 数分すると, https://unplugged-hp.firebaseapp.com に反映されてます. ユーザー名: `kiuchi`, パスワード `mickey` です. (まぁどーせ公開するし適当でいいかなと思い...)
6. 一応確認します. LGTM(Looks Great to Me ね) だったら, circleci #TODO: リンク貼る で, `Approve`を押します. これ押すとこれまた数分で本番に反映されます.

↓ 自分のパソコンで書きたい方はどうぞ. ぶっちゃけ楽です. clone して, 更新して(確認には yarn run dev), commit してpush. push した瞬間circleci でビルドが走ります. 便利. 

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
# you may change port number by usinfg --port 3333
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## modules

### bootstrap-vue/nuxt

components reference : https://bootstrap-vue.js.org/docs/components/alert

### nuxt-fontawesome

- [icons](https://fontawesome.com/icons?d=gallery&m=free)
- use like `<font-awesome-icon icon="tractor"/>`
