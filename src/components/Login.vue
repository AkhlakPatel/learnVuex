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
import { mapState, mapActions ,mapGetters} from "vuex";
import b4a from '../back4app/back4appServices'
export default {
  name: "Login",
  data() {
    return {
      loginModel: {
        username: "",
        password: "",
        data:''
      },
    };
  },
  computed: { 
    ...mapState({  users: state => state.users.all}) },
  methods: {
    ...mapActions(["login"], {
            getAllUsers: 'getAll'}),
    ...mapGetters(["user"]),
    hanldeLogin(e) {
      e.preventDefault();
      const { username, password } = this.loginModel;
    //   console.log(username, password);
      if (username && password) {
        this.login({ username, password });
        console.log(this.$store.getters.user)
      }
    },
    getUserInfo(){
       b4a.getUser().then((res)=>{
         console.log(res)
       })
    }
  },

};
</script>