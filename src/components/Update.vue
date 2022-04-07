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
// import b4a from '../back4app/back4appServices'
import { mapActions } from "vuex";
export default {
  name: "User",
  data() {
    return {
      updateModel: {
        username: "",
        email: "",
        id:''
      },
    };
  },
  methods: {
    ...mapActions(["update",'getAll','getUser']),

    updateUser() {
      let id = this.$route.params.id
      this.updateModel.id = id
      this.update(this.updateModel);
      this.$router.push('/list')
    },
  },
//  async mounted(){
  //  let id = this.$route.params.id
  //  b4a.getUser(id).then((res)=>{
  //    console.log(res)
  //    this.updateModel = res
  //  })
  
//  }
};
</script>