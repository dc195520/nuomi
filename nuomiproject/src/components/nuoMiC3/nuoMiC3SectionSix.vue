<template>
  <div>
    <div class="section_six">
      <a><p>票房应援榜<span>（实时更新）</span></p><img src="../../assets/image/daren_middle_more.png"></a>
      <div class="section_six_bot">
        <div class="section_six_bot_txt" v-for="i in da15.movieL">
          <img :src="i.movieLm">
          <h3>{{i.movieLa}}</h3>
          <p>第1名 {{i.movieLt}}</p>
        </div>
      </div>
    </div>

    <div class="section_seven1">
      <h3>影片资料</h3>
      <div class="section_seven1_bot">
        <a>
          <img src="../../assets/image/yu18.png" alt="">
          <p>出品发行<span>华策影业（天津）有限公司出品</span></p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "nuoMiC3SectionSix",
      props:["da15"]
    }
</script>

<style scoped>
  .section_six{
    background: #fff;
    margin-top: 0.1rem;
  }
  .section_six a{
    line-height: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    padding: 0 0.12rem;
  }
  .section_six a p{
    font-size: 0.16rem;
    color: #0a0a0a;
  }
  .section_six a p span{
    font-size: 0.14rem;
    color: #8c8c8c;
  }
  .section_six a img{
    width: 0.06rem;
    height: 0.12rem;
  }
  .section_six_bot{
    display: flex;
    justify-content: space-around;
  }
  .section_six_bot_txt{
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 1px;
  }
  .section_six_bot_txt img{
    width: 0.56rem;
    height: 0.56rem;
    border-radius: 50%;
    margin-top: 0.17rem;
    margin-bottom: 0.1rem;
  }
  .section_six_bot_txt h3{
    font-size: 0.16rem;
    color: #141414;
  }
  .section_six_bot_txt p{
    font-size: 0.14rem;
    color: #939393;
    line-height: 0.23rem;
    padding-bottom: 0.1rem;
  }

  .section_seven1{
    background: #fff;
    margin-top: 0.1rem;
  }
  .section_seven1 h3{
    font-size: 0.16rem;
    color: #1a1a22;
    line-height: 0.4rem;
    font-weight: 100;
    border-bottom: 1px solid #f6f6f6;
    padding: 0 0.12rem;
  }
  .section_seven1_bot a{
    display: flex;
    align-items: center;
    width: 44%;
    padding: 0.14rem 0.12rem 0.06rem;
    border-right: 1px solid #f6f6f6;
  }
  .section_seven1_bot a img{
    width: 0.2rem;
    height: 0.2rem;
  }
  .section_seven1_bot a p{
    color: #0f0f0f;
    font-size: 0.15rem;
    display: flex;
    flex-direction: column;
    margin-left: 0.1rem;
    letter-spacing: 1px;
  }
  .section_seven1_bot a p span{
    font-size: 0.13rem;
    color: #8d8d8d;
    width: 76%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 0.23rem;
  }
</style>
