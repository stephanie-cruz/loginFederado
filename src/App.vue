<template>
  <div id="app">
    
      <Navegation />
      <!--Login -->
        <router-view :key="$route.fullPath" />
    
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Lexend+Giga&display=swap');
#app{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 62.5%;
  line-height: 1.7;
color: black;
}
// Lexend Giga
</style>
