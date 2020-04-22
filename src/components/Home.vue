<template>
  <div>
    <v-card width="800px" class="mt-5 mx-auto">
      <v-card-title>
        <h3 v-if="user">Bienvenido, {{ user.displayName }}</h3>
        <h3 v-else>Bienvenido, por favor inica sesión</h3>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase"; //import firebaseui from 'firebaseui'

export default {
  data() {
    return {
      user: null
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.state.user = user;
        this.user = user;
      }
    });
  }
};
</script>

<style></style>
