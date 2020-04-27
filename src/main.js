import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import firebase from 'firebase'

import { firebaseConfig } from './../helpers/fireBaseConfig'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,


  created () {
    firebase.initializeApp(firebaseConfig)
    const userString = localStorage.getItem('user')
    if (userString) {  // EL USUARIO NO TIENE QUE LOGGEARSE DE NUEVO SI LA PAGINA SE REFRESCA
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
  },
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
