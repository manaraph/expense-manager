<template>
  <div class="hello">
    <div class="wrapper">
      <div id="expenseInput" class="">
        <div class="theInput">
          <div>
            <datepicker  placeholder="Select Date"  v-model="vmodelexample"></datepicker>
          </div>
        </div>
        <div class="theInput">
          <input type="text" id="amount" class="fadeIn second" name="amount" placeholder="Enter Amount">
        </div>
        <div class="">
          <input type="textarea" id="reason" class="fadeIn second" name="reason" placeholder="Reason">
        </div>


      </div>
      <button>Add expense</button>
      <!-- <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker> -->
      <!-- <div>{{ vmodelexample}}</div> -->
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'expense',
  components: {
    Datepicker
  },
  props: {
    msg: String
  },
  data(){
    return{
      vmodelexample: ''
    }
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
/* #expenseInput{
  width: 100%;
  margin: 0 auto;
  background-color: #f6f6f6;
}
.theInput {
  width: auto;
  margin: 5%;
  float:  left !important;
  height: auto;
  background: white;
}
input[type=text]{
  background: white;
  
}
#reason{
  width: 35%;
  background: white;
}
button{
  background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 5px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px; 
  border-radius: 3px; 
} */
</style>
