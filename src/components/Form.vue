<template>
<div>                    
    <form class="form" @submit.prevent="submit"> 
                <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" ></GoogleLogin> 
                    <div class="form__text">or</div>
                 <!-- <FormGroup v-on:groups="groups" v-bind:groups="groups"/> -->
                 <div v-for="group in groups" class="form__group" v-bind:key="group.id">
                    <input  v-model="group.data" v-bind:type="group.name" class="form__input" v-bind:placeholder="group.placeholder" v-bind:id="group.name" required>
                    <label v-bind:for="group.name" class="form__label">{{group.name.toUpperCase()}}</label>
                 </div> 

                  <button name="button" type="submit" class="form__button">{{name}}</button>
                  <p class="form__error">{{error}}</p>
                  <div class="form__text" v-if="name === 'Sign In'">
                      <div class="form__text">Don't have an account yet? <router-link to="/SignUp">Sign up</router-link> </div>
                  </div>
    </form>
</div>
</template>
<script>
//import FormGroup from './FormGroup';
import GoogleLogin from 'vue-google-login';
export default{
    name:'Form',
     components:{
      GoogleLogin
    },
    data () {
        return {
        error: null,
        email:'', password:'' ,
        type:'',
        params: {
                    client_id: '786510136323-fosdqjl4umvhh6o43fsvbr039vq0eo6r.apps.googleusercontent.com'
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                    width: 230,
                    height: 50,
                    longtitle: true
                }
        }
       
    },
    props:{
        name:String,
        groups:Array
    },
   
    methods:{
        submit(){        
            if (this.name==='Sign In') {
                this.type='normal';
                this.login();
            }
        },
        
        login() {
            if (this.type==='normal'){
                 this.email= this.groups.filter(el => el.name === 'email').find(el => el.data).data;
                 this.password= this.groups.filter(el => el.name==="password").find(el => el.data).data;
            }
            
            this.$store
                .dispatch('login',{
                     email : this.email,
                     password : this.password,
                     type: this.type
                })
                .then(()=>{
                    this.$router.push({ name: 'Products' })
                })
                .catch(err => {
                    this.error = err.response.data.error
                })
            
        },
        onSuccess(googleUser) {
            console.log(googleUser);
            this.email=googleUser.getBasicProfile().getEmail();
            this.password=''
            this.type='federado'
            this.login();
        }
    }
}
</script>
<style lang="scss" >


.form{
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    &__group{       
        width: 100%;
       
    }

    &__text{
      font-size:14px;
      margin-top:10px;
      color: rgba(0,0,0,.5);
    }

    &__button{
      &,&:link,&:visited{
        width:100%;
        padding: 5px 0px;
        margin-top: 30px;
        margin-bottom:10px;
        background-color: #341c54;
        color:white;
        transition: all .2s;
        border: none;
        border: 2px solid transparent;
        font-size: 1rem;
        
        cursor: pointer;
      }
        &:hover{
           transform: translateY(-3px);
          background-color: #6d3fac;
          border: 2px solid #341c54;
          box-shadow: 0 10px 20px rgba(0,0,0,.2);
        }

        &:focus{
          outline: none; //for the <button> element
          transform: translateY(-1px);
          box-shadow: 0 5px 10px rgba(0,0,0,.2);
        }
    }
    &__input{ // los input no heredan las propiedades de las fuentes
        font-family: inherit;
        color: inherit;
        font-size: 16px;
        padding: 10px 15px;
        border-radius: 2px;
        background-color: rgba(white, .5);
        border: none;
        border-bottom: 2px solid #7E08B1;
        width: 100%;
        display: block;
        transition: all .3s;


        &:focus{
            outline: none;
            box-shadow: 0 10px 20px rgba(0,0,0, .1);
            border-bottom: 3px solid orange;


            &:invalid{
                border-bottom: 3px solid red;
            }
        }

        &::-webkit-input-placeholder{
            color: #999;
        }
    }


   
 
    &__label{
        font-size: 11px;
        font-weight: 700;
        margin-left: 20px;
        margin-top: 7px;
        display: block;
        transition: all .3s;
    }

    &__input:placeholder-shown  ~ &__label{  // sibling selector (input y label son hermanos). label tiene que estar ajuro despues del input en el html
        opacity: 0;
        visibility: hidden;
        transform: translateY(-40px);
    }

    &__error{
        color:red;
    }
}
</style>