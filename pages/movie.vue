<template>
  <div class="main mb-5">
    <h1>ライブ映像</h1>
    <p>
      アンプラで演奏したライブの映像です！<br />
      いろいろなライブの動画を上げています！<br />
      すこしでもアンプラの雰囲気を知ってもらえたら幸いです！
    </p>
    <ol id="songlist">
      <li v-for="movie in movies" :key="movie.id">
        <a :href="'#' + movie.id">{{ movie.title }}</a>
      </li>
    </ol>
    <!-- <p>こっちにも文章はおける</p> -->
    <div v-for="(movie, index) in movies" :key="movie.id">
      <h2 :id="movie.id">{{ index + 1 }}. {{ movie.title }}</h2>
      <div class="iframe-wrap">
        <iframe
          width="440"
          height="247"
          :src="youtubeURL(movie.id)"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
      <p id="description">{{ movie.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      movies: [
        //descriptionの改行はwhite-space: pre-line;によるので、行のはじめに要注意です。
        {
          title: 'だから僕は音楽を辞めた / ヨルシカ',
          id: 'bz5A16-ErBw',//2019 NF2日目 14:30 29
          description: `ヨルシカ、今アンプラでブームきてます…！やってみたいという方、ぜひアンプラでやりましょう！`,
        },
        {
          title: 'GUTS！ / 嵐',
          id: '0kUZ0IxtAas',//2019 NF3日目 13:00 21
          description: `嵐の曲を超大編成、ダンスありでカバーしました！見ているこっちが楽しくなります！`,
        },
        {
          title: 'Revive / 倉木麻衣',
          id: 'ddCry1mYA9I',//2019 NF3日目 13:30 23
          description: `コナンのOP曲だったカッコイイ曲です！
                        トライアングルやアサラトといった一風変わった打楽器が登場します`,
        },
        {
          title: '日曜日のラブレター / Official髭男dism',
          id: 'qp87Nn4YB0M',//2019 NF4日目 13:30 22
          description: `ヒゲダンの曲を金管楽器2本を入れた編成でかっこよくカバーしています！`,
        },
        {
          title: '桜と月（オリジナル曲）',
          id: '43R0ddg65pg',//2019 NF4日目 16:00 35
          description: `アンプラ会員によるオリジナル曲です！
                        オリジナル曲をつくってみたい、演奏してみたいという方はぜひお越しください！`,
        },
        {
          title: 'A.I. Am Human / MONKEY MAJIK',
          id: 'coqbzgCor2w',//2019 6月ライブ 1
          description: `バウロンやウクレレ、グロッケンなど、珍しい楽器も入った9人の大人数バンドです！`,
        },
        {
          title: 'Lovers / sumika',
          id: 'KpGDLJaldOI',//2019 新歓ライブ#4 3
          description: `アンプラではコーラスをつけることも多いです！なんと、この曲ではVo.以外の全員がコーラス担当です！`,
        },
        {
          title: '三日月 / 絢香×玉置浩二',
          id: 'V-eEppoYoow',//2019 新歓ライブ#5 3
          description: `このように楽器１つでもアレンジ次第で素晴らしい演奏をすることができるのもアンプラの魅力です！`,
        },
        {
          title: 'ハレルヤ!!!! / GReeeeN',
          id: 'QvTyq_hChVo',//2019 6月ライブ 8
          description: `コールアンドレスポンスなどの工夫で観客と共に音楽を楽しむことができます。楽しい雰囲気が伝わってきます！`,
        },
        {
          title: 'コイワズライ / Aimer',
          id: 'PCg6uu_hRnk',//2019 9月ライブ 5
          description: `Aimerの曲をアコースティックな雰囲気満載でカバーしています。ボーカルの美しい歌声は必聴です！`,
        },
        {
          title: 'daze / じん feat.メイリア from GARNiDELiA',
          id: 'e6nYr-kVaXk',//2019 新歓路上ライブ#1 1
          description: `去年の新歓路上ライブの様子です！カゲプロのアニメOP曲を、バイオリンありで演奏しています🎻アンプラならではのアレンジです！`,
        },
        {
          title: '夏夜のマジック / indigo la End',
          id: '0fnIGAKDofw',//2018 NF3日目 15:00 35
          description: `しっとりとしたアコギの音色を中心にアンプラらしさが伝わってきます！`,
        },
        {
          title: 'POP STAR / 平井堅',
          id: 'Tc1iQDfY9vo',//2019 卒業ライブ 14
          description: `平井堅の名曲をカバー！スラップベースなどのハイレベルな演奏に注目です！！`,
        },
        {
          title: 'Sing / Goose house',
          id: 'FHNdK0cV10g',//2019 6月ライブ 7
          description: `Goose houseの代表曲を歌うま達が見事にカバー！これぞアンプラ！`,
        },
        {
          title: '今、咲き誇る花たちよ / コブクロ',
          id: 'B_nsyqAKmlI',//2019 9月ライブ 1
          description: `フルートとリコーダーのハーモニーにぜひ注目してください！`,
        },
        {
          title: 'Never Ending World / SEKAI NO OWARI',
          id: 'dAErc5htcVQ',//2019 9月ライブ 7
          description: `弦楽器3本をいれた豪華編成でセカオワの曲を演奏しています！`,
        },
        {
          title: 'ダンスロボットダンス / ナユタン星人',
          id: '_YIwKWJXUqo',//2019 10月ライブ 1
          description: `アンプラでボカロは難しい…と思いきや、実は人気ジャンル！
                        ナユタン星人の曲をかっこよくアレンジしています！`,
        },
        {
          title: '赤いスイートピー / 松田聖子',
          id: 'ywpIHjFnz90',//2019 10月ライブ 5
          description: `ボーカル、ピアノ、ギターの少人数編成が映える松田聖子の大ヒット曲です`,
        },
      ],
    }
  },
  methods: {
    youtubeURL: (id) => 'https://www.youtube.com/embed/' + id,
  },
   head () {
    return {
      meta: [
        { hid: 'twitter-description', name: 'og:description', content: '京大アンプラグドで、過去に演奏された動画を公開しています。' }
      ]
    }
  }
}
</script>

<style scoped>
ol#songlist {
  margin-left: 0;
  padding-left: calc(10px + 1rem);
}
ol#songlist li {
  margin: 0.5rem auto;
}

p#description {
  margin: 0.25rem 0 0.5rem 10px;
  white-space: pre-line;
}

.iframe-wrap {
  padding-left: 10px;
}

@media screen and (max-width: 767px) {
  .iframe-wrap {
    position: relative;
    width: 100%;
    padding: 56.25% 0 0;
  }

  .iframe-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    max-width: 560px;
    max-height: 315px;
  }
}
</style>
