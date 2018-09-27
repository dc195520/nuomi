<template>
  <div>
    <div class="section_four">
      <a><p>电影资讯</p><img src="../../assets/image/daren_middle_more.png"></a>
      <h3>{{da14.movieT}}</h3>
      <div class="section_four_images">
        <img v-for="i in da14.movieH" :src="i" alt="">
      </div>
      <p>19小时前</p>
    </div>
    <div class="section_five1">
      <a><p>观影<span>优惠</span><i>• 购票送货流量</i></p><img src="../../assets/image/daren_middle_more.png"></a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "nuoMiC3SectionFour",
      props:["da14"]
    }
</script>

<style scoped>
  .section_four{
    background: #fff;
    margin-top: 0.1rem;
  }
  .section_four a{
    line-height: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    padding: 0 0.12rem;
  }
  .section_four a p{
    font-size: 0.16rem;
    color: #0a0a0a;
  }
  .section_four a img{
    width: 0.06rem;
    height: 0.12rem;
  }
  .section_four h3{
    font-size: 0.16rem;
    font-weight: 100;
    color: #131313;
    margin-top: 0.1rem;
    line-height: 0.21rem;
    padding: 0 0.12rem;
  }
  .section_four_images{
    display: flex;
    padding: 0 0.12rem;
    margin-top: 0.1rem;
  }
  .section_four_images img{
    width: 1.17rem;
    height: 0.77rem;
  }
  .section_four_images img:nth-child(2){
    margin: 0 0.02rem;
  }
  .section_four p:last-child{
    font-size: 0.14rem;
    color: #909090;
    line-height: 0.28rem;
    padding-bottom: 0.05rem;
    padding: 0 0.12rem;
  }
  .section_five1{
    background: #fff;
    margin-top: 0.1rem;
    padding: 0 0.12rem;
  }
  .section_five1 a{
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 0.45rem;
  }
  .section_five1 a p{
    font-size: 0.16rem;
    color: #000;
    display: flex;
    align-items: center;
  }
  .section_five1 a i{
    font-style: normal;
    font-size: 0.12rem;
    color: #3e3e3e;
    display: block;
    margin-left: 0.02rem;
  }
  .section_five1 a p span{
    font-size: 0.16rem;
    color: #ab7615;
    display: block;
  }
  .section_five1 img{
    width: 0.06rem;
    height: 0.12rem;
  }
</style>
