<template>
  <div>
    <header>
      <img :src=one.goodsImg alt="">
      <div class="d4_top1">
        <img src="../../assets/images/bdar_drawable_icon_titlebar_back_normal.png" alt="" @click="pp">
        <div class="d4_top2">
          <img src="../../assets/images/bdar_drawable_icon_share_disable.png" alt="">
          <img src="../../assets/images/arrive_star_empty.png" alt="">
          <img src="../../assets/images/bdar_drawable_icon_titlebar_more_normal.png" alt="">
        </div>
      </div>
      <div class="d4_bottom">
        <img src="../../assets/images/d41.jpg" alt="">
        <p>2张</p>
      </div>

    </header>
        <!-- d4_xc -->
        <div class="d4_xc">
          <h3>{{one.goodsName}}</h3>
          <div class="d4_xc1">
            <img src="../../assets/images/d42.jpg" alt="">
            <p>￥{{one.goodsPrice}}/人</p>
          </div>
        </div>
        <!-- d4_dl -->
        <div class="d4_dl">
          <div class="d4_dlleft">
            <img src="../../assets/images/d43.jpg" alt="">
            <h4>{{one.goodsAddress}}</h4>
          </div>
          <div class="d4_dlright">
            <img class="d4_dlright1"   src="../../assets/images/d44.jpg" alt="">
            <img class="d4_dlright2"  src="../../assets/images/d45.jpg" alt="">
          </div>
        </div>
        <!-- d4_kx -->
        <div class="d4_kx">
        </div>
        <div class="d4_dp">
          <div class="d4_dpleft">
            店铺<span>活动</span>
            <p>  . 消费送流量</p>
          </div>
          <div class="d4_dpright">
            <img src="../../assets/images/d46.jpg" alt="">
          </div>
        </div>
        <!-- d4_kx -->
        <div class="d4_kx">
    </div>
  </div>
</template>

<script>
    export default {
        name: "dmsdetailsheader",
        props:["one"],
      methods:{
        pp(){
          this.$router.go(-1)
        }
      }
    }

</script>

<style scoped>

  header{
    width: 100%;
    height: 2.1rem;
    background:pink;
    position: relative;
    /*background:url("../../../static/data/image/d18.gif");*/
  }
  header img{
     width: 100%;
    height: 2.1rem;
  }
  .d4_top1{

    display: flex;
    width:100%;
    justify-content: space-between;
    padding:0rem 0.12rem 0 0.12rem;
    box-sizing: border-box;
    left:0;
    top:0.3rem;
    position: absolute;
  }
  .d4_top1 img{
    width: 0.22rem;
    height: 0.22rem;
  }
  .d4_top2{
    display: flex;
  }
  .d4_top2 img{
    width: 0.22rem;
    height: 0.22rem;
    margin-left: 0.25rem;
  }
  /*d4_bottom*/
  .d4_bottom{
    width: 0.5rem;
    height: 0.22rem;
    border-radius: 0.11rem;
    background: #030303;
    opacity: 0.6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.06rem;
    box-sizing: border-box;
    position: absolute;
    bottom:0.1rem;
    right:0.16rem;
  }
  .d4_bottom img{
    width: 0.13rem;
    height: 0.15rem;
  }
  .d4_bottom p{
    color: #ffffef;
    font-size: 0.12rem;
  }

  /*d4_xc*/
  .d4_xc{
    display: flex;
    flex-direction: column;
    background: #fff;
    justify-content: center;
    align-items: center;
    height: 0.7rem;
    border-bottom: 1px solid #f8f8f8;
  }
  .d4_xc h3{
    font-size: 0.18rem;
    color: #101010;
  }
  .d4_xc1{
    display: flex;
    margin-top: 0.1rem;
  }
  .d4_xc1 img{
    width: 0.82rem;
    height: 0.16rem;
    margin-right: 0.08rem;
  }
  .d4_xc1 p{
    font-size: 0.12rem;
    color: #cecece;
  }

  /*d4_dl*/
  .d4_dl{
    display: flex;
    justify-content: space-between;
    padding-left: 0.12rem;
    box-sizing: border-box;
    border-top:1px solid #f1f1f1;
    width: 100%;
    background: #fff;
  }
  .d4_dlleft{

    display: flex;
    padding:0.15rem 0;
  }
  .d4_dlleft img{
    width: 0.12rem;
    height: 0.15rem;
    margin-right: 0.1rem;
  }
  .d4_dlleft h4{
    font-size: 0.14rem;
    color: #252525;
  }
  .d4_dlright{
    display: flex;
    padding:0.12rem 0;
  }
  .d4_dlright1{
    width: 0.07rem;
    height: 0.25rem;

  }
  .d4_dlright2{
    width: 0.13rem;
    height: 0.22rem;
    margin:0 0.23rem 0 0.16rem;
  }
  /*d4_kx*/
  .d4_kx{
    width: 100%;
    height: 0.08rem;
    background: #f4f6f5;
  }
  /*d4_dp*/
  .d4_dp{
    display: flex;
    height: 0.44rem;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    padding:0 0.15rem;
  }
  .d4_dpleft{
    display: flex;
    font-weight: 600;
    font-size: 0.14rem;
    color: #000000;
  }
  .d4_dpleft span{
    font-size: 0.14rem;
    color: #ca9f82;
    display: block;
    margin-right: 0.04rem;
    font-weight: 600;
  }
  .d4_dpleft p{
    font-size: 0.14rem;
    color: #797979;
  }
  .d4_dpright img{
    width: 0.06rem;
    height: 0.07rem;
  }
</style>
