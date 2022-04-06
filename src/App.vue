<template>
  <div id="app">
    <div id="nav">
      <span><router-link to="/signup">Signup</router-link></span>
      <span><router-link to="/login">Login</router-link></span>
      <span><router-link to="/list"> List</router-link></span>
      <span><router-link to="/search">Search</router-link></span>
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name:'App',
  
}
</script>
<style>

#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  background-color: #bbd6ff;
  width: 100vw;
  height: 100vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 2px;
}
#nav span {
  margin-top: 10px;
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
  text-align: center;
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
background-color: #8fd1e5c7;
color: black;
border: 2px solid black;
border-radius: 10px;
padding: 10px;
  }
</style>
