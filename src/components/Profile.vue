<template>
  <div>
    <navigation />
    <div>{{user.email}}</div>
  </div>
</template>
<script>
import navigation from "@/components/NavBar.vue";

//import navigation from "@/components/NavBar.vue";
//import store from "./../store/index";
//import firebase from "firebase";
export default {
  components: {
    navigation
  },
  data() {
    return {
      user: this.$store.state.user
    };
  }
};
</script>
