<template>
  <div id="app">
    <login/>
    <!-- <expense/> -->
  </div>
</template>

<script>
// import Expense from './components/Expense.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    Login,
    // Expense
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
