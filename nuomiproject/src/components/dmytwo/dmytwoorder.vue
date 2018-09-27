<template>
    <div>
      <!--nav-->
      <div class="d3_jftop" @click="toOrd">
        <h2>我的订单</h2>
        <div class="d3_jftright">
          <p>查看全部</p>
          <img src="../../assets/images/d341.gif" alt="">
        </div>
      </div>
      <nav>
        <a href="javascript:;" class="d3a"><img src="../../assets/images/d362.gif" alt="" >    <span>代付款</span></a>
        <a href="javascript:;"><img src="../../assets/images/d352.gif" alt=""><span>已付款</span></a>
        <a href="javascript:;"><img src="../../assets/images/d355.gif" alt=""><span>待评价</span></a>
        <a href="javascript:;"><img src="../../assets/images/d353.gif" alt=""><span>退款</span></a>
      </nav>
    </div>
</template>

<script>
    export default {
      name: "dmytwoorder",
      methods:{
        toOrd(){
          this.$router.push({
            name: 'dorder'
          })
        }
      }
    }
</script>

<style scoped>
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
  /*nav*/
  nav{
    display:flex;
    height: 0.9rem;
    align-items: center;
    color:#fff;
    background: #fff;
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
</style>
