<template>
  <div>
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
    },
  },
};
</script>