<template>
<div>
     <div v-for="group in groups" class="form__group" v-bind:key="group.name">
         <input v-model="group.data" v-bind:type="group.name" class="form__input" v-bind:placeholder="group.placeholder" v-bind:id="group.name" required>
         <label v-bind:for="group.name" class="form__label">{{group.name.toUpperCase()}}</label>
         
    </div> 
</div>
   
</template>
<script>/*

    export default{
        name:'FormGroup',
        data(){
            return {
                data:''
            }
        },
        props:{
            groups:Array
        }
    }*/
</script>
<style>
</style>