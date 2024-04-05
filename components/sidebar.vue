<template>
  <div class="sidebar">
    <ul>
      <li class="sidebar-item">
        <h3>新歓特設X</h3>
        <div>
          <a
            class="twitter-timeline"
            data-height="400"
            data-theme="light"
            href="https://twitter.com/unplugged2024"
            >Tweets by unplugged2024</a
          >
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.sidebar-item {
  list-style: none;
}
ul {
  padding: 0px;
}
.sidebar h3 {
  margin-top: 20px;
  margin-bottom: 0px;
  padding: 2px 8px;
  background-color: #ffffdd;
  border: 3px solid #ffeeaa;
  color: #463100;
  font-size: 1.3em;
  font-weight: bold;
}
.sidebar div {
  margin-left: 1px;
  margin-right: 1px;
  padding: 16px;
  border-left: 1px solid #000000;
  border-bottom: 1px solid #000000;
  border-right: 1px solid #000000;
}
.list {
  padding-left: 20px;
}
</style>
<script>
import allPosts from '~/plugins/allPosts.js'
import moment from 'moment'
export default {
  data: function() {
    return {
      allPosts: allPosts,
      todayRoom: '',
      today: '',
      yesterdayRoom: '',
      yesterday: ''
    }
  },
  created: function() {
    this.$axios
      .$get('https://message.ku-unplugged.net/api/meeting_room/today/')
      // .$get('http://localhost:8000/api/meeting_room/today/')
      .then(res => {
        this.todayRoom = res.room == null ? "終日使用不可" : res.room
        this.today = res.date
        this.yesterday = res['date-before']
        this.yesterdayRoom = res['room-before']
      })
  },
  filters: {
    md: function(date) {
      return moment(date).format('M/D')
    }
  }
}
</script>
