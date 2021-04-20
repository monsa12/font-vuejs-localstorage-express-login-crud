import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if(token){
  Vue.prototype.$http.defaults.headers.common['token'] = token;
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
