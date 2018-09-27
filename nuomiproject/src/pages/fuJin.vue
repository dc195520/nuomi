<template>
    <div>
        <fu-jin-nav :list1="msServe"></fu-jin-nav>
    </div>
</template>

<script>
import fuJinNav from "../components/fujin/fuJinNav";

export default {
  name: 'fuJin',
  components:{
      fuJinNav,
  },
  data(){
      return {
          msServe:[],
      }
  },
  created(){
      fetch("http://localhost:3000/api/mock21").then((response)=>{
          if(response.ok){
              response.json().then(data=>{
                  this.msServe = data;
                //   console.log(this.msServe);
              })
          }
      })
  }

}
</script>

<style scoped>

</style>
