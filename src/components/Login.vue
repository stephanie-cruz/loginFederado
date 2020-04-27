<template >
  <div>
    <Banner v-bind:title="title" v-bind:name="name" v-bind:groups="groups"/>
  </div>
</template>

<script>
import Banner from './Banner.vue';
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "Login",
  data() {
    return {
      user: null,
      title:'Log In to Your account',
      name:'Sign In',
      groups:[{id:1,name:'email',placeholder:'Email account', data:''},
              {id:2,name:'password',placeholder:'password',data:''}]

    };
  },
  components:{
      Banner
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

    var uiConfig = {
       callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            console.log('bienennnnn'+authResult+'biennnn'+redirectUrl);
            return true;
          },
          signInFailure: function(error) {
           console.log('error',+error);
          }
    },
      signInFlow: "popup",
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
     
    }
    /*var user2 = firebase.auth().currentUser;
    console.log(user2);*/
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style lang="scss" scoped>


   
</style>

