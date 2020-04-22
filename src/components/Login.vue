<template>
  <div>
    <v-card width="400px" class="mt-5 mx-auto">
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-form>
          <div id="firebaseui-auth-container"></div>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "Login",
  data() {
    return {
      user: null
    };
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

    var uiConfig = {
      signInFlow: "popup",
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style></style>
