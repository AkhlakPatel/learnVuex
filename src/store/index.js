import Vue from 'vue'
import Vuex from 'vuex'
import LoginSignup from './modules/LoginSignup'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    LoginSignup
  }
})
