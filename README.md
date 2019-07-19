# Kyodai Unplugged&#39;s Home Page
 
## How To Write
### はじめに
お仕事お疲れ様です. 2016年入会中川です! Wordpress 嫌になって移行しました. サーバー構成の関係でセキュリティ面で強く, 一生アプデしなくていいはずです. あとスマホ対応もしました. 歴史的な経緯を盛り込んでおくと, 2012年に三吉さんが旧HP(html手打ち)から`wordpress`に移行, 2019年に`nuxt`に移行です🎉 

管理を簡単に(といってちょっと面倒にはなっていますが, データ消失のリスクに備えるとかいう手間も一緒に減らしてるので勘弁してください...), 運営を堅実にかつ体制を柔軟に, 見やすくいサイト(スマホ対応が急務でしたね...), 個人情報とかGDPRとかしっかり, を目標に移行しました(URL変わってないので引越しではないです). まぁこれなんとかしてくれとかあったら気軽に連絡してください~

### 記事の追加方法
- 今まで通りweb(githubだけど...)でできます!
- `markdown` 使えるので楽です! (markdown の書き方は![ここ](https://qiita.com/tbpgr/items/989c6badefff69377da7)とか参考にしてください. htmlの10000倍は楽です.
- @つよいひと もちろん, `git clone`して好きなエディタで書いても大丈夫です.
- ファイルアップロードとかも対応してます
- ちょっと手順慣れはいるのでご勘弁を...


### 固定ページの編集
1. github上で pages #TODO: リンクはる に行きます. 
2. 目的のページ(紹介ならabout.mdとか)を押して右上の鉛筆マーク(edit this file)を押します. 
3. 書き換えます. Preview changes で, markdown の状態がわかります. 便利. 
4. 下の方に行って, Commit changesを記入します
  1. テンプレ通りでいいです. `Update about.md`とか簡単で. 「かいちょーに言われて嫌々書いた」とかでも全然良いと思います. 
  2. `commit directory to the master branch`を選んじゃって大丈夫です. 気になる人はPR立ててください. 
  3. `Commit changes`を押します. 
5.数分すると, https://unplugged-hp.firebaseapp.com に反映されてます. ユーザー名: `kiuchi`, パスワード `mickey` です. (まぁどーせ公開するし適当でいいかなと思い...)
6. 一応確認します. LGTM(Looks Great to Meね) だったら, circleci #TODO: リンク貼る で, `Approve`を押します. これ押すとこれまた数分で本番に反映されます. 
  





## Build Setup

``` bash
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
