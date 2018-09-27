<template>
   <div class="b-theader">
     <img @click="back" class="b-tback" src="../../assets/image/wallet_juhe_back_normal.png" alt="">
     <p class="b-title">电影•演出</p>
     <img class="b-search" src="../../assets/image/icon_nav_sousuo_normal.png" alt="">
   </div>
</template>

<script>
    export default {
        name: "nuoMiTuiJianHeader",
        methods:{
           back(){
          this.$router.go(-1);
        }
      },
    }
</script>

<style scoped>
  .b-theader{
    background: #fdfdfd;
    display: flex;
    justify-content: space-between;
    padding: 0 0.15rem;
    height:0.42rem ;
    align-items: center;
    border-bottom: 1px solid #ececec;
  }
  .b-tback{
    width:0.09rem ;
    height:0.16rem ;
  }
  .b-title{
    line-height:0.42rem ;
    font-size:0.18rem;
    color:#000000 ;
  }
  .b-search{
    width:0.16rem ;
    height:0.16rem ;
  }
</style>
