<template>
  <div>
    <br />
    <input
      class="input"
      type="text"
      placeholder="Enter username"
      v-model="loginModel.username"
    />
    <br />
    <br />
    <input
      class="input"
      type="password"
      placeholder="Enter password"
      v-model="loginModel.password"
    />
    <br /><br />
    <button class="button" @click="hanldeLogin">Login</button>
    <button class="button" @click="getUserInfo()">getUser</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import b4a from '../back4app/back4appServices'
export default {
  name: "Login",
  data() {
    return {
      loginModel: {
        username: "",
        password: "",
      },
    };
  },
  computed: { ...mapState(["status"]) },
  methods: {
    ...mapActions(["login"]),
    hanldeLogin(e) {
      e.preventDefault();
      const { username, password } = this.loginModel;
    //   console.log(username, password);
      if (username && password) {
        this.login({ username, password });
      }
    },
    getUserInfo(){
       b4a.getUser()
    }
  },
};
</script>