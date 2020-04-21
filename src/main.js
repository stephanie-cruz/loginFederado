import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase' //import firebaseui from 'firebaseui'

import { firebaseConfig } from './../helpers/fireBaseConfig'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.dispatch('login', user)
        user.getIdToken().then((id) => {
          console.log(id)
        })
      }
    })
  },

  render: (h) => h(App),
}).$mount('#app')
