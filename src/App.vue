<template>
  <div id="app">
    <div id="nav">
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link>
    <router-view/>
    </div>
      <User/>
      <!-- <ShowAllData/> -->
  </div>
</template>

<script>
import User from './components/User.vue'
// import ShowAllData from './components/Show.vue'
export default {
  name:'App',
  components:{
    User,
    // ShowAllData
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
}

#nav {
  padding: 20px 0px;
   border: 2px solid #42b983;
  border-radius: 10px;
  width: 300px;
  display: block;
  margin: auto;
  padding-bottom: 40px;
  margin-top: 100px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.input {
  margin-top: 10px;
  width: 250px;
  height: 20px;
  border: 1px solid #42b983;
  border-radius: 5px;
  color: black;
}
.button{
  width: 70px;
  border-radius: 5px;
  background-color:#42b983;
  color: white;
}
.table_center{
margin-left: auto;
margin-right: auto;
margin-top: 20px;
background-color: cadetblue;
color: black;
border: 2px solid black;
border-radius: 10px;
padding: 10px;
  }
</style>
