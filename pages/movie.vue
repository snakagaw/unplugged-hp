<template>
  <div class="main mb-5">
    <h1>ライブ映像</h1>
    <p>
        アンプラで演奏したライブの映像です！<br>
        すこしでもアンプラの雰囲気を知ってもらえたら幸いです！    
    </p>
    <ol id="songlist">
        <li v-for="movie in movies" :key="movie.url">
            <a :href="'#' + movie.url">{{movie.title}}</a>
        </li>
    </ol>
    <!-- <p>こっちにも文章はおける</p> -->
    <div v-for="(movie, index) in movies" :key="movie.url">
        <h2 :id="movie.url">{{index + 1}}. {{movie.title}}</h2>
        <div class="iframe-wrap">
            <iframe
                width="440"
                height="247"
                :src="getURL(movie.url)"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                >
            </iframe>
        </div>
        <p id="description">{{movie.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            movies: [//descriptionの改行はwhite-space: pre-line;によるので、行のはじめに要注意です。
                {
                    title: 'Revive / 倉木麻衣',
                    url: 'ddCry1mYA9I',
                    description: `コナンのOP曲だったカッコイイ曲です！
                        トライアングルやアサラトといった一風変わった打楽器が登場します`,
                },
                {
                    title: '日曜日のラブレター / Official髭男dism',
                    url: 'qp87Nn4YB0M',
                    description: `ヒゲダンの曲を金管楽器2本を入れた編成でかっこよくカバーしています！`,
                },
                {
                    title: 'Sing / Goose house',
                    url: 'FHNdK0cV10g',
                    description: `Goose houseの代表曲を歌うま達が見事にカバー！これぞアンプラ！`,
                },
                {
                    title: '今、咲き誇る花たちよ / コブクロ',
                    url: 'B_nsyqAKmlI',
                    description: `フルートとリコーダーのハーモニーにぜひ注目してください！`,
                },
                {
                    title: 'Never Ending World / SEKAI NO OWARI',
                    url: 'dAErc5htcVQ',
                    description: `弦楽器3本をいれた豪華編成でセカオワの曲を演奏しています！`,
                },
                {
                    title: 'ダンスロボットダンス / ナユタン星人',
                    url: '_YIwKWJXUqo',
                    description: `アンプラでボカロは難しい…と思いきや、実は人気ジャンル！
                        ナユタン星人の曲をかっこよくアレンジしています！`,
                },
                {
                    title: '赤いスイートピー / 松田聖子',
                    url: 'ywpIHjFnz90',
                    description: `ボーカル、ピアノ、ギターの少人数編成が映える松田聖子の大ヒット曲です`,
                },
                
            ],
        }
    },
    methods: {
        getURL: (youtubeID) => 'https://www.youtube.com/embed/' + youtubeID,
    }
}
</script>

<style scoped>
ol#songlist{
    margin-left: 0;
    padding-left: calc(10px + 1rem);
}
ol#songlist li{
    margin: 0.5rem auto;
}

p#description{
    margin: 0.25rem 0 0.5rem 10px;
    white-space: pre-line;
}

.iframe-wrap{
    padding-left: 10px;
}

@media screen and (max-width: 767px) { 
.iframe-wrap{
	position: relative;
	width: 100%;
	padding: 56.25% 0 0;
}

.iframe-wrap iframe{
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