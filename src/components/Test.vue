<template>
<div>

    <!-- <p>The date stored in Vuex is {{users}}.</p> -->
    <table>
        <tr><th>Username</th><th>Email</th></tr>
         <tr v-for="item in users" :key="item.id">
        <td>{{ item.username }}</td>
        <td>{{ item.email }}</td>
         </tr>
    </table>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            user:''
        }
    },
    computed: {
        ...mapGetters(['users'])
    },
}
</script>