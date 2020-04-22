<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Money Gain</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :to="link.url"
        :key="`${link.label}-footer-link`"
        text
        rounded
        >{{ link.label }}</v-btn
      >
      <v-btn v-if="this.$store.state.user" @click="logOut" text rounded>
        LogOut
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      links: [
        {
          label: 'Login',
          url: '/login',
        },
        {
          label: 'Profile',
          url: '/profile',
        },
      ],
    }
  },

  methods: {
    logOut(e) {
      e.stopPropagation()
      firebase.auth().signOut()
      this.$store.state.user = null
      this.$router.push({
        path: '/login',
      })
    },
  },
}
</script>
