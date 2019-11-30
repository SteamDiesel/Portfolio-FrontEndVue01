import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import 'es6-promise/auto';
import App from './App.vue'
import store from './store'


Vue.use(VueAxios, axios)

Vue.config.productionTip = true

Vue.component('hello-world', require('./components/HelloWorld.vue').default)
Vue.component('api-test', require('./components/ApiTest.vue').default)
Vue.component('base-layout-component', require('./components/layout/BaseLayout.vue').default)
Vue.component('lander-component', require('./components/layout/Lander.vue').default)
Vue.component('projects-component', require('./components/layout/Projects.vue').default)
Vue.component('project-component', require('./components/layout/Project.vue').default)
Vue.component('about-section-component', require('./components/layout/AboutSection.vue').default)
Vue.component('about-component', require('./components/layout/About.vue').default)
Vue.component('resume-component', require('./components/Resume.vue').default)
Vue.component('footer-component', require('./components/layout/Footer.vue').default)
Vue.component('api-tester-component', require('./components/api/ApiTester.vue').default)
Vue.component('api-login-component', require('./components/api/user/Login.vue').default)
Vue.component('api-register-component', require('./components/api/user/Register.vue').default)
Vue.component('login-section-component', require('./components/layout/LoginSection.vue').default)
Vue.component('select-component', require('./components/common/Select.vue').default)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
