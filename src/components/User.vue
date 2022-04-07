<template>
  <div>
    <h2>User-Info</h2>
    <table border="2" class="table_center">
      <tr>
        <th>ObjectId</th>
        <th>Username</th>
        <th>Email</th>
        <th>Operations</th>
      </tr>
      <tr v-for="item in users" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.email }}</td>
        <router-link :to="'/update/' + item.id">
          <button class="button">Update</button>
        </router-link>
        <button class="button" @click="deleteUser(item.id)">Delete</button>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "User",
  computed:{ 
    ...mapGetters(["users"])},

  created() {
    this.getAll();
  },
  methods: {
    ...mapActions(["getAll", "delete"]),
    deleteUser(id) {
      // b4a.deleteUser(id);
      this.delete(id);
    },
  },
};
</script>
<style scoped>
</style>