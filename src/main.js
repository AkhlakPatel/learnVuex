import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import router from './router/router'
Vue.config.productionTip = false

new Vue({
  // router,
  store,

  router,
  render: h => h(App)
}).$mount('#app')
