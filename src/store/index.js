import Vue from 'vue'
import Vuex from 'vuex'
import Employee from './modules/Employee'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Employee
  }
})
