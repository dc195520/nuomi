<template>
  <div id="app">
      <houtai-header></houtai-header>
      <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
  import HoutaiHeader from "./components/houtaiHeader";
  export default {
    name:"APP",
    components: {HoutaiHeader},
    provide(){
      return{
        reload:this.reload
      }
    },
    data(){
      return{
        isRouterAlive:true
      }
    },
    methods:{
      reload(){
        this.isRouterAlive=false
        this.$nextTick(function(){
          this.isRouterAlive=true
        })
      }
    }
  }
</script>
<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
