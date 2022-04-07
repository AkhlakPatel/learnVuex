<template>
  <div class="signup">
    <input
      class="input"
      type="text"
      placeholder="username"
      v-model="signupModel.username"
    />
    <br /><br />
    <input
      class="input"
      type="email"
      placeholder="Enter email"
      v-model="signupModel.email"
    />
    <br />
    <br />
    <input
      class="input"
      type="password"
      placeholder="password"
      v-model="signupModel.password"
    /><br /><br />
    <button class="button" @click="handleSubmit">Signup</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Signup",
  data() {
    return {
      signupModel: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["status"]),
  },
  methods: {
    ...mapActions(["signup"]),
    handleSubmit() {
      this.signup(this.signupModel);
      this.$router.push('/login')
    },
  },
};
</script>
<style scoped>
.signup {
  padding: 20px 0px;
   border: 2px solid #42b983;
  border-radius: 10px;
  width: 300px;
  display: block;
  margin: auto;
  padding-bottom: 40px;
  margin-top: 30px;
}
</style>