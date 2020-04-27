<template >
  <div>
    <Banner v-bind:title="title" v-bind:name="name"/>
  </div>
</template>

<script>
import Banner from './Banner.vue';
export default {
    name:'SignUp',
    data(){
        return {
                title: "Sign Up in Uland",
                name:"Sign Up"
        }
    },
    components:{
        Banner
    }
}
</script>
<style>
div{
    margin: 0 auto;
}
</style>