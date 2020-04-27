<template>

    <div class="container">
        <h1>{{title}}</h1>
        <div class="login-container">
            <div class="left-side">
                <img src="../assets/images/login.jpg"/>
            </div>
            <div class="right-side">
                <Form v-bind:name="name" v-bind:groups="groups"/> 
               
            </div>
        </div>
   </div>

</template>
<script>
import Form from './Form.vue';
export default{
    name:'Banner',
    props:{
        title:String,
        name:String,
        groups:Array
    },
    components:{
        Form
    }
}

</script>
<style lang="scss" scoped>

.container{
  width: 70vw;
  //height: 70vh;
  background-color: #fff;
  margin: 40px auto;
  border-radius:20px;
  box-shadow: 0 30px 60px -5px rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-container{
  width: 100%;
  padding: 30px;
  display:flex;
  justify-content: space-between;
  align-items: space-between;
}



h1{
  margin-bottom:20px;
  text-align:center;
  font-size:1.5rem;
}


</style>