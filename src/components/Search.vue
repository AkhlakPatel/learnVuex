<template>
  <div >
    <input v-model="searchQuery" class="search_input" placeholder="type here for search user...."/>

    <table border="1" class="table_center">
        <tr>
            <th>Username</th>
            <th>Email</th>
        </tr>
        <tr v-for="r of resultQuery" :key="r.id">
            <td>{{r.username}}</td>
            <td>{{r.email}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
   data() {
    return {
      searchQuery: null,
    };
  },
  computed: {
    ...mapGetters(["userInfo","users"]),
    resultQuery() {
      if (this.searchQuery) {
        return this.users.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.username.toLowerCase().includes(v));
        });
      } else {
        return this.users;
      }
    },
  },
};
</script>
<style scoped>
.search_input{
    width: 38vw;
    margin-top: 20px;
    height: 30px;
    border-radius: 10px;
    background-color: #fff7ee;
    text-align: center;
    color: #000104;
}
</style>