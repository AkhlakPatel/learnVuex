import axios from 'axios'

const state = {
    employee : []
}
const getters = {
    allEmployee : state => state.employee
}
const actions = {
    async getEmployee({commit}){
        const response = await axios.get('http://localhost:3000/products');
        commit('setEmployee',response.data)
    }
}
const mutations = {
    setEmployee:(state,employee)=> (state.employee=employee)
}

export default {
    state,
    getters,
    actions,
    mutations
}