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
          title: '桜の森 / 星野源',
          id: 'GB_BsxYwL50',//2022 新歓ライブ#3 02
          description: `去年の新歓ライブでの演奏です！星野源の曲をフルート・クラリネット・ホルンを用いて演奏しています。アンプラでしかできない楽器構成です！`,
        },
        {
          title: '歌うたいのバラッド / 斉藤和義',
          id: 'BJSbAYe4EvA',//2022 9月下旬ライブ 04
          description: `名曲をギター１本とボーカル２人で、美しくもノスタルジックな演奏に仕上げています。`,
        },
        {
          title: '情熱大陸 / 葉加瀬太郎',
          id: 'wmOzkqVKLwU',//2022　NF4日目 16
          description: `迫力のあるインストバンドです！曲中、バイオリン・ギター・ベース・カホン・ピアノ全ての楽器にそれぞれあるソロパートが見所です！`,
        },
        {
          title: '異端なスター / Official髭男dism',
          id: 'MoO2c6KU3gg',//2022 クリスマスライブ 02
          description: `アンプラでもやはりヒゲダンは人気です！`,
        },
        {
          title: '1999 / 羊文学',
          id: '7CnLaTvsz4I',//2022　クリスマスライブ　09
          description: `アコースティックギター・ベース・カホンのアンプラらしいシンプルな３ピースですね。アンプラではこのように全員でコーラスをすることもあります！`,
        },
        {
          title: 'I knew you were trouble / Taylor Swift',
          id: 'hlYt0850oC8',//2022 NF4日目 11
          description: `洋楽、テイラー・スウィフトの楽曲もカッコ良く歌い上げています！`,
        },
        
          title: 'ベルベットの詩 / back number',
          id: 'nTdeDE_Ft9o',//2022 NF4日目 07
          description: `映画の主題歌にもなったback numberの楽曲を去年のNFで演奏しました！`,
        },
        {
          title: '君がくれた夏 / 家入レオ',
          id: 'V-c0FVH9uvX00',//2022 NF4日目 13
          description: `アコギが良く似合う家入レオの一曲です。`,
        },
        {
          title: 'ひまわりの約束 / 秦基博',
          id: 'sGyJ1sdj3mM',//2019 6月ライブ 8
          description: `ボーカルとギター&ハモリの２人で紡ぐ美しい演奏は必聴です。`,
        },
        {
          title: '青春病 / 藤井風',
          id: '',//2022 NF1日目
          description: ``,
        },
        {
          title: 'Spirited Away Medley ～千と千尋の神隠し / 久石譲',
          id: 'DUnKqPVI_n4',//2022 新歓ライブ#1 01
          description: `去年の新歓ライブの様子です！他の軽音サークルではまず見られない楽器構成・インスト・雰囲気をぜひご覧ください。`,
        },
        {
          title: 'The Path to Phantasmal Garden / Nabeshi, Tsukapro & Kitsuka',
          id: 'YtWI2pb0C7o',//2022 NF3日目 20
          description: `なんと、出演者による完全オリジナルのインスト曲です…！去年のNFで披露し、贅沢な空間を作り上げました。`,
        },
        {
          title: 'Pale Blue / 米津玄師',
          id: 'A1GFvRkHIDk',//2022 10月ライブ 03
          description: `ストリングスのバイオリンやピアノにより、壮大な音の広がりに仕上がっています…！`,
        },
        {
          title: 'カブトムシ / aiko',
          id: 'H0-BIEn3AE4',//2022 クリスマスライブ 06
          description: `『カブトムシ』は実は冬の曲らしく、去年のクリスマスライブで演奏されました。ボーカルとギター伴奏が織り成すハーモニーが魅力的です。`,
        },
        {
          title: '愛を知るまでは / あいみょん',
          id: 'F8ebVLHuZLg',//2022 NF4日目 09
          description: `バンド演奏には珍しい鍵盤ハーモニカや、芯のある綺麗なボーカルのアカペラパートなどが見所です！`,
        },
        {
          title: '17 / TOMOO',
          id: '',//2023 2月ライブ 05
          description: `最近来ているアーティストTOMOOさんです。アンプラらしい選曲だと思います。流行らせたい曲をやることでみんなに聞いてもらいましょ〜!!`,
        },
        {
          title: '夏夜のマジック / indigo la End',
          id: 'KWGdlnkFIgY',//2022 9月上旬ライブ 01
          description: `アコギとピアノがアンプラらしい雰囲気を醸し出しています！`,
        },
        {
          title: 'ニア / 夏代孝明',
          id: 'oeA6X8_QdmE',//2022 6月ライブ 01
          description: `アンプラではボカロ曲も演奏されます！アンプラグドな楽器編成でもできるように上手くアレンジしています。`,
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
