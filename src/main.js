import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import 'es6-promise/auto';
import App from './App.vue'
import store from './store'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.component('hello-world', require('./components/HelloWorld.vue').default)
Vue.component('api-test', require('./components/ApiTest.vue').default)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
