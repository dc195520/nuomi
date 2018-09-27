<template>
  <div>
  <div class="d3_headerbottom">
    <div class="d3_bottomleft">
      <img src="../../assets/images/d33.gif" alt="">
      <div class="d3_bottomleft2">
        <h3>晴天娃娃</h3>
        <div class="d3_bottomleft3">
          <img src="../../assets/images/d34.gif" alt="">
          <p>普通用户</p>
        </div>
      </div>
    </div>
    <div class="d3_bottomright">
      <img src="../../assets/images/d35.gif" alt="">
    </div>
  </div>

  <!--nav-->
  <nav>

    <a href="javascript:;" class="d3a"><p>1 </p> <img src="../../assets/images/d362.gif" alt="" >    <span>代付款</span></a>
    <a href="javascript:;"> <img src="../../assets/images/d37.gif" alt=""><span>可使用</span></a>
    <a href="javascript:;"> <img src="../../assets/images/d38.gif" alt=""><span>待评价</span></a>
    <router-link to="dorder" tag="a">
      <img src="../../assets/images/d39.gif" alt="">
       <span>全部订单</span>
    </router-link>
    <!--<a href="javascript:;"> <img src="../../assets/images/d39.gif" alt=""><span>全部订单</span></a>-->

  </nav>
  </div>
</template>

<script>
    export default {
        name: "dmytop"
    }
</script>

<style scoped>
  /**d3_headerbottom**/
  .d3_headerbottom{
    display: flex;
    justify-content: space-between;
    height: 0.95rem;
    padding: 0 0.14rem;
    align-items: center;
    background: #f6f6f6;
  }
  .d3_bottomleft{
    display: flex;

  }
  .d3_bottomleft img{
    width: 0.62rem;
    height: 0.62rem;
    border-radius: 0.31rem;

  }
  .d3_bottomleft2{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.15rem;
  }
  .d3_bottomleft2 h3{
    font-size: 0.2rem;
    color: #404040;
  }
  .d3_bottomleft3{
    display: flex;
    width: 0.9rem;
    height: 0.22rem;
    background: #bf974d;
    border: 1px solid #caab71;
    border-radius: 0.11rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
  .d3_bottomleft3 img{
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 0.07rem;
  }
  .d3_bottomleft3 p{
    font-size: 0.11rem;
    color: #f3ecdf;
  }
  /*d3_bottomright*/

  .d3_bottomright img{
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 0.3rem;
  }
  nav{
    display:flex;
    height: 0.9rem;
    align-items: center;
    color:#fff;
  }

  nav a{
    display: flex;
    width:25%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  nav a img{
    height:0.27rem;
    width:0.27rem;
  }
  nav a span{
    font-size: 0.11rem;
    color: #161616;
    display: block;
    margin-top: 0.12rem;
  }
  .d3a{
    position: relative;
  }
  .d3a p{
    width: 0.12rem;
    height: 0.12rem;
    background: #d9c296;
    border-radius: 0.04rem;
    position: absolute;
    left:0.5rem;
    top: 0.05px;
    font-size: 0.06rem;
    line-height: 0.12rem;
    text-align: center;
  }

</style>
