<template>
<div>
  <!--d3_kx-->
  <div class="d3_kx">
  </div>
  <div class="d3_cjhy">
    <div class="d3_cjhy2">
      <img src="../../assets/images/d354.gif" alt="">
      <div class="d3_cjhy1">
        <h3>超级会员卡</h3>
        <p>开卡即送超级大礼包，再享首单折</p>
      </div>
    </div>

    <h4> 立即开通</h4>
  </div>

  <!--d3_kx-->
  <div class="d3_kx">
  </div>
  <!--d3_zc-->
  <div class="d3_zc">
    <div class="d3_zctop">
      <h2>我的资产</h2>
    </div>
    <div class="d3_zcbottom">
      <div class="d3_zcbottom1">
        <h3>0</h3>
        <p>优惠券</p>
      </div>
      <div class="d3_zcbottom1 cz">
        <h3>0</h3>
        <p>电影卡</p>
        <a>充值一卡多用</a>
      </div>
      <div class="d3_zcbottom1 cz">
        <h3>0</h3>
        <p>观影卷</p>
        <a>送TA一部电影</a>
      </div>
      <div class="d3_zcbottom1">
        <h3>0</h3>
        <p>兑换码</p>
      </div>
    </div>
  </div>
  <!--d3_kx-->
  <div class="d3_kx">
  </div>
  <!--hd-->
  <div class="d3_hd">
    <div class="d3_hdtop">
      <h2>我的活动</h2>
    </div>
    <div class="d3_hdbottom">
      <div class="d3_hdbottom1">
        <img src="../../assets/images/d356.gif" alt="">
        <p>想看</p>
      </div>
      <div class="d3_hdbottom1 ">
        <img src="../../assets/images/d357.gif" alt="">
        <p>我的评论</p>
      </div>
      <div class="d3_hdbottom1 ">
        <img src="../../assets/images/d358.gif" alt="">
        <p>我的关注</p>
      </div>
      <div class="d3_hdbottom1">
        <img src="../../assets/images/d359.gif" alt="">
        <p>我的预约</p>
      </div>
    </div>
  </div>

  <!--d3_kx-->
  <div class="d3_kx">
  </div>
  <!--d3_gdtj-->
  <div class="d3_gdtj">
    <div class="d3_zctop">
      <h2>更多服务</h2>
    </div>

    <div class="d3_gdfjbot">

      <div class="d3_gdfjbot1">
        <img src="../../assets/images/d360.gif" alt="">
        <p>地理位置</p>
      </div>
      <div class="d3_gdfjbot1">
        <img src="../../assets/images/d361.gif" alt="">
        <p>约票活动</p>
      </div>
      <div class="d3_gdfjbot1">
        <img src="../../assets/images/d362.gif" alt="">
        <p>客服电话</p>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "dmytwoqt"
    }
</script>

<style scoped>

  .d3_kx{
    width: 100%;
    height: 0.08rem;
    background: #f3f6f5;
  }
  .d3_cjhy{
    display: flex;
    height: 0.68rem;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    padding:0 0.15rem;
  }
  .d3_cjhy img{
    width: 0.32rem;
    height: 0.27rem;
  }
  .d3_cjhy1{
    display: flex;
    flex-direction: column;
    margin-left: 0.06rem;
  }
  .d3_cjhy1 h3{
    font-size: 0.14rem;
    color: #767676;
  }
  .d3_cjhy1 p{
    font-size: 0.12rem;
    color: #dadada;
  }
  .d3_cjhy h4{
    width: 0.76rem;
    height: 0.28rem;
    border: 1px solid #dbcaac;
    border-radius: 0.14rem;
    font-size: 0.12rem;
    color: #dbcaac;
    line-height: 0.28rem;
    text-align: center;
  }
  .d3_cjhy2{
    display: flex;
  }
  /*d3_jf*/
  .d3_jf{
    height: 1.6rem;
    background: #fff;
  }
  .d3_jftop{
    display:flex;
    height: 0.46rem;
    border-bottom:2px solid #f3f6f5;
    justify-content: space-between;
    align-items: center;
    padding:0 0.14rem;
    background: #fff;
  }
  .d3_jftop h2{
    font-size: 0.18rem;
    color: #3d3d3d;
  }
  .d3_jftright{
    display:flex;
    align-items: center;
  }
  .d3_jftright p{
    font-size: 0.12rem;
    color: #636363;
  }
  .d3_jftright img{
    width: 0.06rem;
    height: 0.09rem;
    margin-left: 0.1rem;
  }

  .d3_jfbottom{
    display:flex;
    height: 1.1rem;
    align-items: center;
  }
  .d3_jfbottom1{
    display:flex;
    flex:1;
    flex-direction: column;
    align-items: center;
  }
  .d3_jfbottom1 img{
    width: 0.52rem;
    height: 0.52rem;

  }
  .d3_jfbottom2{
    display:flex;
    justify-content: center;
    margin-top: 0.18rem;
  }
  .d3_jfbottom2 img{
    width: 0.1rem;
    height: 0.12rem;
  }
  .d3_jfbottom2 span{
    color: #ababab;
    font-size: 0.12rem;
    margin-left: 0.05rem;
  }

  /*d3_zc*/
  .d3_zc{
    height: 1.6rem;
    background: #fff;
  }
  .d3_zctop{
    display:flex;
    height: 0.46rem;
    border-bottom:1px solid #f3f6f5;
    justify-content: flex-start;
    align-items: center;
    padding:0 0.14rem;
  }
  .d3_zctop h2{
    font-size: 0.18rem;
    color: #3d3d3d;
  }
  .d3_zcbottom{
    display:flex;
    height: 1.1rem;
    align-items: center;
  }
  .d3_zcbottom1{
    display:flex;
    flex:1;
    flex-direction: column;
    align-items: center;
  }
  .d3_zcbottom1 h3{
    font-size: 0.16rem;
    color: #1d1d1d;
  }
  .d3_zcbottom1 p{
    font-size: 0.12rem;
    margin-top: 0.12rem;
    color: #1d1d1d;
  }
  .cz{
    position: relative;
  }

  .cz a{
    font-size: 0.1rem;
    color: #dac397;
    position: absolute;
    left:0.16rem;
    top:0.52rem;
  }
  /*hd*/

  .d3_hd{
    height: 1.6rem;
    background: #fff;
  }
  .d3_hdtop{
    display:flex;
    height: 0.46rem;
    border-bottom:1px solid #f3f6f5;
    justify-content: flex-start;
    align-items: center;
    padding:0 0.14rem;
  }
  .d3_hdtop h2{
    font-size: 0.18rem;
    color: #3d3d3d;
  }
  .d3_hdbottom{
    display:flex;
    height: 1.1rem;
    align-items: center;
  }
  .d3_hdbottom1{
    display:flex;
    flex:1;
    flex-direction: column;
    align-items: center;
  }
  .d3_hdbottom1 img{
    width: 0.31rem;
    height: 0.25rem;
  }
  .d3_hdbottom1 p{
    font-size: 0.12rem;
    margin-top: 0.12rem;
    color: #1d1d1d;
  }

  /*.d3_gdtj*/
  .d3_gdtj{
    background: #fff;
  }

  /*d3_gdfjbot*/

  .d3_gdfjbot{
    display: flex;
    flex-wrap: wrap;
  }
  .d3_gdfjbot1{
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding:0.18rem 0;
    border-bottom: 1px solid #ededed;

  }
  .d3_gdfjbot1:nth-child(2n+1){
    border-right: 1px solid #ededed;
    box-sizing: border-box;
  }
  .d3_gdfjbot1 img{
    width: 0.23rem;
    height: 0.27rem;
  }
  .d3_gdfjbot1 p{
    font-size: 0.14rem;
    color: #353535;
    margin-left: 0.1rem;
  }
</style>
