<template>
  <div class="hello">
    <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->
            <!-- Icon -->
            <div class="fadeIn first">
                <span class="glyphicon glyphicon-user"></span>
            </div>

            <!-- Login Form -->
            <form>
            <input type="text" id="username" class="fadeIn second" name="username" placeholder="username">
            <input type="text" id="expense" class="fadeIn second" name="expense" placeholder="expense">
            <input type="text" id="reason" class="fadeIn third" name="reason" placeholder="reason">
            <input type="submit" class="fadeIn fourth" value="Log In">
            </form>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'expense',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/style.css';

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
