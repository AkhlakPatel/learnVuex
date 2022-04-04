<template>
  <div>
    <h2>Update</h2>
    <input
      class="input"
      type="text"
      placeholder="username"
      v-model="updateModel.username"
    />
    <input
      class="input"
      type="email"
      placeholder="email"
      v-model="updateModel.email"
    />
    <button
      class="button"
      @click="updateUser(updateModel.username, updateModel.email)"
    >
      Update
    </button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "User",
  data() {
    return {
      updateModel: {
        username: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapActions(["update",'getAll']),

    updateUser() {
      this.update(this.updateModel);
      this.getAll()
    },
  },
  
};
</script>