<template>
  <span v-if="today">
      <span v-if="yesterday">
        本日({{ today | md }})の AM 5:00までの例会教室は
        <b>{{ yesterdayRoom }}</b
        >, 本日({{ today | md }})の例会教室は <b>{{ todayRoom }}</b> です.
      </span>
      <span v-else>
        本日({{ today | md }})の例会教室は <b>{{ todayRoom }}</b> です.
      </span>
    </span>
</template>
