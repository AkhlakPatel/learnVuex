<template>
    <div>
        <h2>User-Info</h2>
        <ul>
            <li v-for="user in userInfo" :key="user.id">
                {{user.username}}
                {{user.email}}
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters , mapActions} from 'vuex'
export default {
    name:'User',
    computed:mapGetters(["userInfo"]),
    
    created () {
        this.getAll();
    },
    methods: {
          ...mapActions(['getAll'], {
            // getAllUsers: 'getAll',
            
        })
    },
}
</script>