<template>
  <div class="main">
    <img
      src="https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/main.jpg"
      style="width:100%"
    />
    <h1>京大アンプラグドへようこそ！</h1>
    <p>
      京大アンプラグドは、京都大学公認アコースティック軽音サークルです！
      <br />
      <br />京大、あるいは他大のインカレサークルには、
      <br />軽音はもちろん、オーケストラに合唱・アカペラ、民族楽器などたくさんの音楽サークルがあります。
      <br />
      <br />その中で京大アンプラグドは、アコースティック楽器のみで、
      <br />固定バンドを組まず曲ごとに編成を変え、様々なジャンルの音楽を楽しんでいます。
      <br />
      <br />「アコースティック楽器」といっても
      <br />ボーカル、アコースティックギター、ピアノ、ベース、パーカッションはカホンを中心に、
      <br />ヴァイオリン・チェロといった弦楽器、
      <br />フルート・サックス・トランペット等の管楽器、
      <br />南米・アフリカ等の民族楽器、
      <br />打楽器もボンゴやタンバリンなどがあり、
      <br />他のサークルではなかなか実現できない組み合わせのバンドを組むことができます。
      <br />
      <br />また、その楽器の多様さからも想像できるように、ジャンルもポップス等の歌物にとどまらず、
      <br />ギタリストメインの弾き語りやフォーク・デュオ、押尾コータローに代表されるソロギター、
      <br />→Pia-no-jaC←、PE'Z等のインスト、
      <br />独特な楽器を用いた民族音楽、
      <br />アンプラグドではできなさそうなフュージョンやボカロに至るまで
      <br />大小様々な編成で演奏しています。
      <br />
      <!-- <p :v-html="meeting_room" /> -->
      <no-ssr>{{ get_room() }}</no-ssr>
    </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from '@nuxtjs/axios'

export default {
  components: {
    Logo
  },
  data() {
    return {
      meeting_room: ''
    }
  },
  computed: {
    meeting_room1: function() {
      return this.meeting_room
    }
  },
  created: function() {
    this.$axios.$get('http://localhost:8000/today').then(res => {
      this.meeting_room = res
      console.log(res + this.meeting_room)
    })
  },
  methods: {
    get_room: function() {
      this.$axios.$get('http://localhost:8000/today').then(res => {
        console.log(res)
        return res
      })
    }
  }
}
</script>
