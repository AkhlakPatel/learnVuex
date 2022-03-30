<template>
  <div class="hello">
    <h2>Learn Vuex</h2>
    <ul>
      <li v-for="emp in allEmployee" :key="emp.id">
        {{emp.name}}
        {{emp.developer}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
 computed:mapGetters(['allEmployee']),
 methods:{
   ...mapActions(['getEmployee'])
 },
 created(){
   this.getEmployee()
 }
}
</script>

