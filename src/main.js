import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

import { firebaseConfig } from './../helpers/fireBaseConfig'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,

  created() {
    firebase.initializeApp(firebaseConfig)
  },

  vuetify,
  render: (h) => h(App),
}).$mount('#app')
