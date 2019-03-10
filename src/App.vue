<template>
  <div id="app">
    <header>
      <h3>Please log in to view your expense(s)</h3>
    </header>
    <login/>
    <!-- <expense/> -->
    <footer> <p>&copy;{{new Date().getFullYear()}} - manaraph (Omachonu Manasseh). </p></footer>
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
header{
  top: 0;
  left: 10px;
  margin-top: 20px;
  position: fixed;
  width: 100%;  
}
h3{
  /* color: white; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer{
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100%;  
}
</style>
