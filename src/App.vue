<template>
  <div id="app">
    <v-app>
      <Navegation />
      <!--Login -->
      <v-content>
        <router-view :key="$route.fullPath" />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Navegation from './components/NavBar'
export default {
  name: 'App',

  components: {
    Navegation,
  },

  data: () => ({
    //
  }),
}
</script>
