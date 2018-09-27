<template>
  <div>
    <!--section_two-->
    <div class="section_two">
      <a><p>特价票品<span>特惠等你来</span></p><img src="../../assets/image/yc07.png" alt=""></a>
      <a><p>热门活动<span>领券立减</span></p><img src="../../assets/image/yc08.png" alt=""></a>
      <a><p>演出日历<span>纪念日有我</span></p><img src="../../assets/image/yc09.png" alt=""></a>
      <a><p>精彩剧院<span>场馆任我行</span></p><img src="../../assets/image/yc10.png" alt=""></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "nuoMiC1SectionTwo"
    }
</script>

<style scoped>
  .section_two{
    width: 100%;
    margin-top: 0.1rem;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    letter-spacing: 1px;
  }
  .section_two a{
    width: 50%;
    height: 0.68rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .section_two a:nth-child(1){
    border-bottom: 1px solid #f6f6f6;
    border-right: 1px solid #f6f6f6;
    box-sizing: border-box;
  }
  .section_two a:nth-child(2){
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
  }
  .section_two a:nth-child(3){
    border-right: 1px solid #f6f6f6;
    box-sizing: border-box;
  }
  .section_two a p{
    font-size: 0.14rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0.1rem;
    color: #ff2424;
  }
  .section_two a:nth-child(2) p{
    color: #000;
  }
  .section_two a:nth-child(2) p span{
    color: #969696;
  }
  .section_two a:nth-child(3) p{
    color: #000;
  }
  .section_two a:nth-child(3) p span{
    color: #969696;
  }
  .section_two a p span{
    font-size: 0.12rem;
    color: #ff8080;
  }
  .section_two a img{
    width: 0.52rem;
    height: 0.47rem;
    margin-right: 0.21rem;
  }
</style>
