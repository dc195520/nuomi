<template>
    <div>
      <!--顶部-->
      <div class="c1_header">
        <img @click="back" src="../../assets/image/wallet_juhe_back_normal.png" alt="">
        <p>演出赛事</p>
        <img src="../../assets/image/yc13.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
      name: "nuoMiC1Header",
      methods:{
        back(){
          this.$router.go(-1);//返回上一层
        }
      }
    }
</script>

<style scoped>
  /*顶部*/
  .c1_header{
    height: 0.44rem;
    display: flex;
    align-items: center;
    padding: 0 0.15rem;
    justify-content: space-between;
    background: #fff;
    letter-spacing: 0.01rem;
    border-bottom: 1px solid #dcdcdc;
    position: fixed;
    top: 0;
    width: 92%;
    z-index: 999;
  }
  .c1_header img:first-child{
    width: 0.1rem;
    height: 0.16rem;
  }
  .c1_header p{
    font-size: 0.18rem;
    font-weight: 600;
    color: #000;
  }
  .c1_header img:last-child{
    width: 0.18rem;
    height: 0.18rem;
  }

</style>
