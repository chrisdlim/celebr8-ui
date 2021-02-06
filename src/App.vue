<template>
  <div id="app">
    <Celebrations/>
  </div>
</template>

<script>
import Celebrations from './components/Celebrations.vue'

export default {
  name: 'App',
  components: {
    Celebrations
  },
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
