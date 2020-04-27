<template>
  <div class="container" v-if="loggedIn">
    <div class="card" v-for="product in products" v-bind:key="product.id">
        <img class="card__image" v-bind:src="product.img"/>
        <div class="card__title">{{product.title}}</div>
        <div class="card__price">${{product.price}}</div>
        <div class="card__description">
          {{product.description}}
        </div>
        <div class="card__add-to-card">
             <button class="btn-2">
                <span class="btn-2__visible">Add to card (icon)</span>
                <span class="btn-2__invisible">-> (icon)</span>
             </button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//import firebase from "firebase"; //import firebaseui from 'firebaseui'
import { authComputed } from '../vuex/helpers.js'

export default {
  name:'Products',
  data () {
    return {
      isLoading: true,
      products: [],
      error:null,
      user:null
      
    }
  },
  computed: {
    ...authComputed
  },
  created () {
    axios.get('//localhost:3000/products')
    .then(({ data }) => {

      this.products = data.products.products;
      this.isLoading = false
    }).catch(error =>{
        this.error=error
    })
  }
}
</script>

<style lang="scss">
.container{
  margin-top:20px;
  padding:40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


.card{
  background-color: white;
  width: 250px;
  margin: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  border-radius:3px;
   overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .3s;

    &:hover{
          transform: scale(1.03) translateY(-1.5rem);
          .btn-2{
          background-image: linear-gradient(to left, #ffa54a, #ff7855);
          }
      }
  
    &__image{
    width:100%;
    height:200px;
  }

      &__title{
        font-size:1rem;
        cursor:pointer;
        text-align: center;
        padding: 10px 3px;
        background-color: white;
        box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        width: 80%;
        border-radius: 3px;
        color: black;
        transform: translateY(-2.5rem);
      &:hover{
        color:#ff7855;
        
      }
    }

      &__price{
      font-family: 'Abel', sans-serif;
    // align-self: flex-start;
      width:80%;
      margin: 0 auto;
      font-size: 1.5rem;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      transform: translateY(-1.5rem)
    }

    &__description{
      font-family: 'Abel', sans-serif;
      font-size:0.8rem;
      align-self:flex-start;
      width:80%;
      margin: 0 auto;
    }

    &__add-to-card{
      width:100%;
      text-align:center;
    }
}






.btn-2{
   cursor:pointer;
   margin:20px auto;
  font-family:1rem;
    width:90%;
    text-transform: uppercase;
    border-radius: 20px;
    border: none;
    background-image: linear-gradient(to right,#ffa54a, #ff7855);
    color: #fff;
      position: relative;
   overflow: hidden; // para que no se vea el boton invisible

    & > *{
        display: inline-block; // si no no sirve el padding
        height: 100%;
        width: 100%;
        transition: all .2s;
    }

    &__visible{
        padding: 10px 0px;
       
    }   

    &__invisible{
        padding: 10px 0;
        position: absolute;
        left: 0;
        top: -100%;
       
    }

    

    &:focus{
        outline: none;
        animation: pulsate 1s infinite;
    }

    &:hover .btn-2__invisible{   
            top: 0;  
    }

    &:hover .btn-2__visible{   
        transform: translateY(100%);
    }
}

</style>