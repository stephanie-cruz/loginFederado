import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
    },
  },
  actions: {
    login({ commit }, user) {
      commit('SET_USER_DATA', user)
    },
  },
  modules: {},
})
