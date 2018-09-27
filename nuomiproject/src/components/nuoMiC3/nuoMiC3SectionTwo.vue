<template>
  <div>
    <div class="section_two">
      <div class="section_two_top">
        <p>媒体库</p>
        <a><span>视频9</span><span>|</span><span>图片43</span><img src="../../assets/image/daren_middle_more.png"></a>
      </div>
      <div class="section_two_bot">
        <a><video src="da13.movieVideo" :poster="da13.movieF" controls></video></a>
        <div class="section_two_bot_img">
          <img v-for="i in da13.movieJ" :src="i">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "nuoMiC3SectionTwo",
      props:["da13"]
    }
</script>

<style scoped>
  .section_two{
    margin-top: 0.1rem;
    background: #fff;
  }
  .section_two_top{
    display: flex;
    justify-content: space-between;
    padding: 0 0.12rem;
  }
  .section_two_top p{
    font-size: 0.16rem;
    color: #0a0a0a;
    line-height: 0.4rem;
  }
  .section_two_top a{
    line-height: 0.4rem;
    display: flex;
    align-items: center;
  }
  .section_two_top a span{
    display: block;
    font-size: 0.12rem;
    color: #828282;
    margin: 0 0.05rem;
  }
  .section_two_top a img{
    width: 0.06rem;
    height: 0.12rem;
  }
  .section_two_bot{
    display: flex;
    padding-left: 0.12rem;
    padding-bottom: 0.15rem;
  }
  .section_two_bot a{
    width: 1.28rem;
    height: 0.71rem;
  }
  .section_two_bot a video{
    width: 100%;
    height: 100%;
  }
  .section_two_bot_img{
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-left: 0.1rem;
  }
  .section_two_bot_img::-webkit-scrollbar{
    height: 0;
  }
  .section_two_bot_img img{
    width: 0.96rem;
    height: 0.71rem;
    margin: 0 0.05rem;
  }
  .section_two_bot_img img:first-child{
    margin-left: 0;
  }
  .section_two_bot_img img:last-child{
    padding-right: 0.1rem;
  }
</style>
