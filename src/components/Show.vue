<template>
  <div>
    <!-- <h2>All users :</h2> -->
 <table border="1" class="table_center">
  <tr>
    <th>ObjectId</th>  
    <th>Username</th>  
    <th>Email</th>  
  </tr>
  <tr v-for="user in users" :key="user.id">
    <td>{{user.id}}</td>
    <td>{{user.username}}</td>
    <td>{{user.email}}</td>
  </tr>
</table>
  </div>
</template>
<script>
// import b4a from "../back4app/back4appServices";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Show",
  computed: mapGetters(["userInfo"]),
  data() {
    return {
      users: {},
    };
  },
  // mounted() {
  //   b4a.getAllData().then((res) => {
  //     this.users = res
  // console.log(this.users)
  //   });
    // console.log(this.getAllUser)
  // },
  methods: {
    ...mapActions(["getAllUser"]),
  },
};
</script>

<style scoped>
.table_center{
margin-left: auto;
margin-right: auto;
margin-top: 20px;
background-color: cadetblue;
color: black;
border: 2px solid black;
border-radius: 10px;
padding: 10px;
  }
</style>