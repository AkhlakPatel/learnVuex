<template>
  <div>
    <!-- <h2>All users :</h2> -->
    <table >
      <tr v-for="user in userInfo.username" :key="user.id">
        <th>{{ user}}</th>
      </tr>
      <tr v-for="user in users.email" :key="user.id" class="email">
        <th>{{user}}</th>
        <button class="button">Update</button>
      </tr>
    </table>
  </div>
</template>
<script>
// import b4a from "../back4app/back4appServices";
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "Show",
   computed:mapGetters(["userInfo"]),
  data() {
    return {
      users: {
        username: "",
        email: "",
      },
    };
  },
  mounted() {
    // b4a.getAllData().then((res) => {
    //   this.users.username = res.usernames;
    //   this.users.email = res.emails;
    // });
    console.log(this.getAllUser)
  },
  methods:{
      ...mapActions(['getAllUser'])
  }
};
</script>

<style scoped>
.email{
  position: relative;
  top: -140px;
  left: 126px;
}
</style>