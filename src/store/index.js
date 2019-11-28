import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    lander_title: '',
    lander_subtitle: '',
    lander_location: '',
    location_link: '',
    lander_blurb: '',
    about_title: '',
    about_subtitle: '',
    about_description: '',
    contact_phone: '',
    contact_email: '',
    contact_github: '',
    contact_location: '',
    showResume: false,
    showRegister: true,
    showLogin: true,
    api_uri: 'https://api.steamdiesel.dev/api',
    // api_uri: 'http://backend.test/api',
    auth_token: '',
  },
  mutations: {
    setSiteData(state, payload){
      state.lander_title = payload.content.lander_title;
      state.lander_subtitle = payload.content.lander_subtitle;
      state.lander_location = payload.content.lander_location;
      state.location_link = payload.content.location_link;
      state.lander_blurb = payload.content.lander_blurb;
      state.about_title = payload.content.about_title;
      state.about_subtitle = payload.content.about_subtitle;
      state.about_description = payload.content.about_description;
      state.contact_phone = payload.content.contact_phone;
      state.contact_email = payload.content.contact_email;
      state.contact_github = payload.content.contact_github;
      state.contact_location = payload.content.contact_location
    },
    setProjects(state, payload){
      state.projects = payload;
    },
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
    siteLoad({state , commit}){
      Axios.get(state.api_uri + '/sitecontent/1').then(response =>{
        commit('setSiteData', response.data);
      });
    },
    projectsLoad({state, commit}){
      Axios.get(state.api_uri + '/siteprojects/1').then(response => {
        commit('setProjects', response.data.projects);
      });
    }
  },
  modules: {
  }
})
