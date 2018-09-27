<template>
  <div>
  <!--d3_kx-->
  <div class="d3_kx">
  </div>
  <!--d3_jf-->
  <div class="d3_jf">
    <div class="d3_jftop">
      <h2>积分商城</h2>
      <div class="d3_jftright">
        <p>今日签到+5积分</p>
        <img src="../../assets/images/d341.gif" alt="">
      </div>
    </div>
    <div class="d3_jfbottom">
      <div class="d3_jfbottom1">
        <img src="../../assets/images/d40.gif" alt="">
        <div class="d3_jfbottom2">
          <img src="../../assets/images/d342.gif" alt="">
          <span>9</span>
        </div>

      </div>
      <div class="d3_jfbottom1">
        <img src="../../assets/images/d41.gif" alt="">
        <div class="d3_jfbottom2">
          <img src="../../assets/images/d342.gif" alt="">
          <span>9</span>
        </div>

      </div>
      <div class="d3_jfbottom1">
        <img src="../../assets/images/d42.gif" alt="">
        <div class="d3_jfbottom2">
          <img src="../../assets/images/d342.gif" alt="">
          <span>9</span>
        </div>

      </div>
    </div>
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
        <p>糯米卷</p>
      </div>
      <div class="d3_zcbottom1">
        <h3>0</h3>
        <p>优惠券</p>
      </div>
      <div class="d3_zcbottom1">
        <h3>0</h3>
        <p>卡包</p>
      </div>
      <div class="d3_zcbottom1 cz">
        <h3>0</h3>
        <p>余额</p>
        <a>糯米卡充值</a>
      </div>
    </div>
  </div>
  <!--d3_kx-->
  <div class="d3_kx">
  </div>

  <!--d3_gdtj-->
  <div class="d3_gdtj">
    <div class="d3_zctop">
      <h2>更多推荐</h2>
    </div>
    <div class="d3_gdtjtop ">
      <div class="d3_gdtjtop1">
        <div class="d3_gdtjtop2">
          <img src="../../assets/images/d343.gif" alt="">
          <h3>百度百聘</h3>
        </div>
        <p>兼职热招</p>
      </div>
      <div class="d3_gdtjtop1">
        <div class="d3_gdtjtop2">
          <img src="../../assets/images/d344.gif" alt="">
          <h3>流量银行</h3>
        </div>
        <p>百度神卡</p>
      </div>
    </div>
    <div class="d3_gdfjbot">
      <div class="d3_gdfjbot1">
        <img src="../../assets/images/d345.gif" alt="">
        <p>百度钱包</p>
      </div>
      <div class="d3_gdfjbot1">
        <img src="../../assets/images/d346.gif" alt="">
        <p>我的收藏</p>
      </div>
      <div class="d3_gdfjbot1">
        <img src="../../assets/images/d347.gif" alt="">
        <p>我的聚会</p>
      </div>
      <div class="d3_gdfjbot1">
        <img src="../../assets/images/d348.gif" alt="">
        <p>我的消费</p>
      </div>
      <div class="d3_gdfjbot1">
        <img src="../../assets/images/d349.gif" alt="">
        <p>我的简历</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "dmycenter"
    }
</script>

<style scoped>
  /*d3_jf*/
  .d3_jf{
    height: 1.6rem;
    background: #fff;
  }
  .d3_jftop{
    display:flex;
    height: 0.46rem;
    border-bottom:1px solid #f3f6f5;
    justify-content: space-between;
    align-items: center;
    padding:0 0.14rem;
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
  /*.d3_gdtj*/
  .d3_gdtj{
    background: #fff;
  }
  .d3_gdtjtop{
    display: flex;
    height: 1.0rem;
    /*align-items: center;*/
    border-bottom: 1px solid #f8f8f8;
    border-top: 1px solid #f8f8f8;
  }
  .d3_gdtjtop1{
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem 0;
  }
  .d3_gdtjtop1 :nth-child(1){
    border-right: 1px solid #f8f8f8;
  }
  .d3_gdtjtop2{
    display: flex;
    align-items: center;

  }
  .d3_gdtjtop2 img{
    width: 0.21rem;
    height: 0.21rem;

  }
  .d3_gdtjtop2 h3{
    font-size: 0.14rem;
    color: #4d4d4d;
    margin-left: 0.15rem;
    font-weight: 100;
  }
  .d3_gdtjtop1 p{
    width: 0.9rem;
    height:0.32rem;
    border-radius: 0.16rem;
    border:1px solid #969696;
    background: #fff;
    font-size: 0.14rem;
    color: #9e9e9e;
    text-align: center;
    line-height: 0.32rem;
    margin-top: 0.18rem ;
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
    width: 0.21rem;
    height: 0.21rem;
  }
  .d3_gdfjbot1 p{
    font-size: 0.14rem;
    color: #353535;
    margin-left: 0.1rem;
  }

</style>
