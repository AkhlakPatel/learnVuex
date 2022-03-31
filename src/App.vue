<template>
  <div id="app">
    <div id="nav">
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 2px solid #42b983;
  border-radius: 10px;
  width: 300px;
  display: block;
  margin: auto;
  padding-bottom: 40px;
  margin-top: 100px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.input {
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
</style>
