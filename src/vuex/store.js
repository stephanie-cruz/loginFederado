import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    },
    CLEAR_USER_DATA () {
        this.state.user = null
    }
  },
  actions: {
    login({ commit }, credentials) {
      return axios
      .post('//localhost:3000/login', credentials)
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  modules: {},
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  }
})