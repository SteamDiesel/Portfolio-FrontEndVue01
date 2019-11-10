import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showResume: false,
  },
  mutations: {
    toggleResume (state) {
      state.showResume = !state.showResume;
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
