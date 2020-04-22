<template>
  <div v-if="this.$store.state.user">
    <v-card class="mx-auto mt-5" max-width="300">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="this.$store.state.user.photoURL"
      >
      </v-img>

      <v-card-subtitle class="pb-0">Your Profile</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ this.$store.state.user.displayName }}</div>

        <div>Email: {{ this.$store.state.user.email }}</div>
        <div v-if="this.$store.state.user.phoneNumber">
          Phone Number: {{ user.phoneNumber }}
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>
