<template>
  <div class="main">
    <h1>ライブ映像</h1>
    <p>何かこのへんに説明文あるといいかも？</p>
    <ol id="songlist">
        <li v-for="movie in movies" :key="movie.url">
            <a :href="'#' + movie.url">{{movie.title}}</a>
        </li>
    </ol>
    <p>こっちにも文章はおける</p>
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
            movies: [
                {
                    title: 'ラビューラビュー / ポルノグラフィティ',
                    url: 'bkScuc1PBmU',
                    description: `この辺に曲に関する説明文
                        ほげほげ
                        ほげほげほげ`,
                },//改行はwhite-space: pre-line;によるので、行のはじめに要注意です。
                {
                    title: '君と歩いた季節 / いきものがかり',
                    url: 'Y0Ho9tFjL3g',
                    description: `ふがふが
                        ぐがふが
                        ほげ`,
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