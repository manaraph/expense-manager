<template>
  <div class="hello">
    <header><h3>Please log in to view your expense(s)</h3></header>

    <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
                <v-avatar color="#56baed">
                    <v-icon dark>account_circle</v-icon>
                </v-avatar>
            </div>

            <!-- Login Form -->
            <form @submit.prevent="handleSubmit">
            <input type="text" id="username" class="fadeIn second" name="username" placeholder="username">
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="password">
            <input id="signIn" type="submit" class="fadeIn fourth" value="Log In" :disabled="loading">
            <input type="submit" class="fadeIn fifth" value="Sign Up" :disabled="loading">

            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
            </div>

        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'login',
  props: {
    msg: String
  },
  data(){
    return{
      loading: false,
      error: '',
    }
  },
  methods:{
    handleSubmit(){
      // alert("Here");
      this.$router.push("/expenses");
      // this.$router.push("/search?"+this.foobar); //foobar can be name of input field
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import '~material-design-icons-iconfont/src/material-design-icons'; */
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
