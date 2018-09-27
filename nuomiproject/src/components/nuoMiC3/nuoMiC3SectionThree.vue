<template>
  <div>
    <div class="section_three">
      <a><p>演职人员</p><span>全部<img src="../../assets/image/daren_middle_more.png"></span></a>
      <div class="section_three_images">
        <a v-for="i in da12.movieI"><img :src="i.movieImage">{{i.movieAct}}</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "nuoMiC3SectionThree",
      props:["da12"]
    }
</script>

<style scoped>
  .section_three{
    background: #fff;
    margin-top: 0.1rem;
    padding: 0 0.12rem;
  }
  .section_three a{
    line-height: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .section_three a p{
    font-size: 0.16rem;
    color: #0a0a0a;
  }
  .section_three a span{
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    color: #828282;
  }
  .section_three a span img{
    width: 0.06rem;
    height: 0.12rem;
    margin-left: 0.03rem;
  }
  .section_three_images{
    display: flex;
    padding-bottom: 0.1rem;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .section_three_images::-webkit-scrollbar{
    height: 0;
  }
  .section_three_images a{
    font-size: 0.12rem;
    color: #828282;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0.03rem;
    line-height: 0.26rem;
  }
  .section_three_images a img{
    width: 0.63rem;
    height: 0.89rem;
  }
  .section_three_images a:first-child{
    margin-left: 0;
  }
  .section_three_images a:last-child{
    margin-right: 0;
  }
</style>
