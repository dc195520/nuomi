<template>
  <div class="footer">
    <router-link to="nuoMiTuiJian"><span></span>推荐</router-link>
    <router-link to="filmAndci"><span></span>电影</router-link>
    <router-link to="nuoMiC1"><span></span>演出</router-link>
    <a><span></span>饭圈</a>
    <router-link to="nuoMiC2"><span></span>我的</router-link>
  </div>
</template>

<script>
  export default {
    name: "moviePublic"
  }
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #f6f6f6;
  }
  .footer a{
    font-size: 0.12rem;
    color: #8c8c8c;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer a span{
    display: block;
    width: 0.23rem;
    height: 0.23rem;
  }
  .footer a:nth-child(1) span{
    background: url("../assets/image/pu01.png");
  }
  .footer a:nth-child(2) span{
    background: url("../assets/image/pu02.png");
  }
  .footer a:nth-child(3) span{
    background: url("../assets/image/pu03.png");
  }
  .footer a:nth-child(4) span{
    background: url("../assets/image/pu04.png");
  }
  .footer a:nth-child(5) span{
    background: url("../assets/image/pu05.png");
  }
  .footer .router-link-active{
    color: #000;
  }
  .footer .router-link-active:nth-child(1) span{
    background: url("../assets/image/pu001.png");
  }
  .footer .router-link-active:nth-child(2) span{
    background: url("../assets/image/pu002.png");
  }
  .footer .router-link-active:nth-child(3) span{
    background: url("../assets/image/pu003.png");
  }
  .footer .router-link-active:nth-child(4) span{
    background: url("../assets/image/pu004.png");
  }
  .footer .router-link-active:nth-child(5) span{
    background: url("../assets/image/pu005.png");
  }
</style>
