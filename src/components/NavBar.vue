<template>
  
    <header class="header">
         <router-link to="/" class="header__title">
            Uland
          </router-link>
      <div class="header__nav">
          <router-link v-if="loggedIn" to="/products" class="header__btn">
            Products
          </router-link>
          <router-link v-if="loggedIn" to="/dashboard" class="header__btn">
            Profile
          </router-link>
          <router-link v-if="!loggedIn" to="/login" class="header__btn">
            Login
          </router-link>
          <button v-else type="button"  @click="logout" class="header__btn--2">
            Logout
          </button>
      </div>
    </header> 

</template>

<script>
import { authComputed } from '../vuex/helpers.js';

export default {
  computed:{
     ...authComputed,
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
}
</script>



<style lang="scss" scoped>

.router-link-active, a{
  color:black;
  text-decoration:none;
}

  .header{
      height: 10vh;
      background-color:#fff;
      display: flex;
      padding:0 30px;
      box-shadow: 0 15px 30px rgba(0,0,0,0.15);
     // justify-content: space-between;
      align-items: center;
      font-weight: 400;
      font-size:1rem;

    &__nav{
      
      margin-right:0;
      justify-self:flex-end;
      display:flex;
      algn-items:center;
      :not(:last-child){
        margin-right:25px;
      }
    }

    &__btn{
      margin:0;
     // margin-right: 30px;
      padding-bottom:3px;
      text-decoration: none;
      transition: color .2s;
      cursor:pointer;
        &:hover{
        color:#F78915;
        border-bottom: 2.5px solid #F78915;
        }
     
    }
    &__btn--2{
          &,&:link,&:visited
        {
          padding:5px 10px;
          background-color: #6d3fac;
          color:white;
          font-weigth:700;
          border:none;
          border-radius:10px;
          box-shadow: 0 10px 20px rgba(0,0,0,.2);
          transition: all .2s;
          } 
          &:focus{
            outline:none;
          }
          &:hover{
             box-shadow: 0 5px 10px rgba(0,0,0,.2);
             transform: translateY(0.25rem);
          }
        }

  &__title{
    margin:0;
    font-size: 1.5rem;
    font-weight: 700;
    cursor:pointer;
  }
}

</style>