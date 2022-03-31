<template>
    <div>
        <h2>User Info</h2>
        
         <ul v-if="users">
            <li v-for="user in users" :key="user.id">
                {{user.firstName + ' ' + user.lastName}}
            
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
            // account: state => state.account,
            users: state => state.all
        })
    },
    created () {
        this.getAllUsers();

    },
    mounted(){
    setTimeout(() => {
        console.log(this.getAllUsers)
    }, 1000);
    },
    methods: {
        ...mapActions({
            getAllUsers: 'getAll',
        })
    }

}
</script>