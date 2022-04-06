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
    ...mapGetters(["userInfo"]),
    resultQuery() {
      if (this.searchQuery) {
        return this.userInfo.items.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.username.toLowerCase().includes(v));
        });
      } else {
        return this.userInfo.items;
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