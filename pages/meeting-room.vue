<template>
  <div class="main">
    <h1>例会教室一覧</h1>
    <b-table :items="rooms" :fields="fields">
      <template v-slot:cell(date)="data">
        <span :class="data.value | dayColor">
          {{ data.value | md }}
        </span>
      </template>
      <template v-slot:cell(room)="data">
        <span :class="data.value | roomColor">
          {{ data.value | room }}
        </span>
      </template>
    </b-table>
  </div>
</template>
<style scoped></style>
<script>
import moment from 'moment'
export default {
  data: function() {
    return {
      rooms: [],
      fields: [
        {
          key: 'date',
          thStyle: {
            display: 'none'
          }
        },
        {
          key: 'room',
          thStyle: {
            display: 'none'
          }
        }
      ]
    }
  },
  created: function() {
    this.$axios
      .$get('https://meetingroomcontroller.appspot.com/room/all')
      // .$get('http://localhost:8009/room/all')
      .then(res => {
        this.rooms = res
      })
  },
  computed: {
    // dateColor(date) {
    //   let day = moment(date).format('dd')
    //   return day
    //   switch (day) {
    //     case 0:
    //       return 'danger'
    //       break
    //     case 6:
    //       return 'info'
    //       break
    //     default:
    //       return ''
    //       break
    //   }
    // }
  },
  filters: {
    md: function(date) {
      return moment(date).format('MM/DD (dd)')
    },
    dayColor(date) {
      let day = moment(date).format('d')
      switch (day) {
        case '0':
          return 'text-danger'
          break
        case '6':
          return 'text-primary'
          break
        default:
          return ''
          break
      }
    },
    room(room) {
      switch (room) {
        case '':
          return '例会教室は未登録'
          break
        default:
          return room
          break
      }
    },
    roomColor(room) {
      switch (room) {
        case '終日使用不可':
          return 'text-danger'
          break
        case '':
          return 'text-muted'
        default:
          return ''
          break
      }
    }
  }
}
</script>
