<template>
  <div>
    <h2>User-Info</h2>
    <!-- <ul>
      <li v-for="(item) in userInfo.items" :key="item.id">
        {{ item }} <br />
      </li>
      <button class="button">
        <router-link to="/update">Update</router-link>
      </button>
      <button class="button" @click="deleteUser">Delete</button>
    </ul> -->
    <table border="2" class="center">
      <tr v-for="item in userInfo.items" :key="item.id">
        <td v-for="i in item" :key="i.id">
          {{ i }}
        </td>
      </tr>
      <tr v-for="item in userInfo.items" :key="item.id">
        <td v-for="i in item" :key="i.id">
          <button class="udpate_buttun">Update</button>
        </td>
      </tr>
    </table>
    <!-- <table >
      <tr>
        <th>Username</th>
        <th>Email</th>
      </tr>
     <tbody v-for="item in userInfo.items" :key="item.id">
        <tr v-for="i in item" :key="i.id">  
            <td>{{i}}</td>
        </tr>
    </tbody>
    </table> -->
  </div>
</template>

<script>
import b4a from "../back4app/back4appServices";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "User",
  computed: mapGetters(["userInfo"]),

  created() {
    this.getAll();
  },
  methods: {
    ...mapActions(["getAll"], {
      // getAllUsers: 'getAll',
      deleteUser: "delete",
    }),
    deleteUser() {
      b4a.deleteUser();
      this.getAll();
    },
  },
};
</script>
<style scoped>
tr {
  display: block;
  float: left;
}
th,
td {
  display: block;
  border: 1px solid black;
}

tr > *:not(:first-child) {
  border-top: 0;
}
tr:not(:first-child) > * {
  border-left: 0;
}
.udpate_buttun {
  width: 44px;
  height: 17px;
  font-size: 10px;
}
</style>