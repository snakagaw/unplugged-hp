<template>
  <div class="main">
    <h1>ライブ映像</h1>
    <p>何かこのへんに説明文あるといいかも？</p>
    <ul>
        <li v-for="movie in movies" :key="movie.url">
            <a :href="'#' + movie.url">{{movie.title}}</a>
        </li>
    </ul>
    
    <div v-for="movie in movies" :key="movie.url">
        <h2 v-text="movie.title" :id="movie.url"></h2>
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
        <p v-text="movie.description"></p>
    </div>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            movies: [
                {title: 'ラビューラビュー/ポルノグラフィティ', url: 'bkScuc1PBmU', description: 'fuga'},
            ],
        }
    },
    methods: {
        getURL: (youtubeID) => 'https://www.youtube.com/embed/' + youtubeID,
    }
}
</script>

<style scoped>
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