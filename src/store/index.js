import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showResume: false,
    showRegister: true,
    api_uri: 'http://backend.test/api',
    auth_token: '',
  },
  mutations: {
    toggleResume (state) {
      state.showResume = !state.showResume;
    },
    setToken (state, payload){
      state.auth_token = payload.token;
    },
    switchRegister(state, payload){
      state.showRegister = payload;
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  modules: {
  }
})
