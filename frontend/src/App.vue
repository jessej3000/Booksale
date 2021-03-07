<template>
  <div>
    <BookSale />
  </div>
</template>

<script>
import BookSale from './views/BookSale.vue'

export default {
  name: 'App',
  components: {
    BookSale
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
