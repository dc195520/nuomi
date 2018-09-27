<template>
  <div class="section_three_bot">
    <div class="section_three_bot_sec" v-for="i in date21.movieTheater" @click="getMovie(date21.movieId,date21.movieTheater.movieTheaterId)">
      <h3>{{i.movieTheaterName}}</h3>
      <a class="section_three_bot_a"><p>{{i.movieTheaterLocation}}</p><span>{{i.movieTheaterDistance}}</span></a>
      <div class="section_three_bot_aa">
        <a>
          <span>￥</span><p>{{i.movieTheaterMoney}}</p><span>起</span><i>{{i.moviePreferentialPrice}}</i>
        </a>
        <span>座</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "nuoMiC2SectionThreeBot",
      props:["date21"],
      methods: {
        getMovie(id3,id4){
          this.$router.push({
            name:"moveStore",
            params: {
              id3: id3,
              id4:id4
            }
          })
        }
      }
    }
</script>

<style scoped>
  .section_three_bot_sec{
    padding: 0 0.1rem;
    border-bottom: 1px solid #f6f6f6;
  }
  .section_three_bot_sec h3{
    line-height: 0.3rem;
    margin-top: 0.07rem;
    font-size: 0.16rem;
    color: #000;
    font-weight: 100;
    letter-spacing: 1px;
  }
  .section_three_bot_a{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .section_three_bot_a p{
    width: 85%;
    font-size: 0.12rem;
    color: #6a6a70;
    line-height: 0.23rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 1px;
  }
  .section_three_bot_a span{
    font-size: 0.12rem;
    color: #78787e;
  }
  .section_three_bot_aa{
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 0.39rem;
  }
  .section_three_bot_aa a{
    display: flex;
    align-items: center;
  }
  .section_three_bot_aa a span{
    font-size: 0.12rem;
    color: #c5a15e;
  }
  .section_three_bot_aa a p{
    font-size: 0.16rem;
    color: #b18026;
    margin: 0 0.04rem;
  }
  .section_three_bot_aa a i{
    display: block;
    width: 1.32rem;
    height: 0.2rem;
    color: #b78935;
    background: #fff9ed;
    border-radius: 0.02rem;
    font-style: normal;
    text-align: center;
    line-height: 0.2rem;
    font-size: 0.12rem;
    letter-spacing: 1px;
    margin-left: 0.04rem;
  }
  .section_three_bot_aa span{
    font-size: 0.12rem;
    color: #89898e;
  }
</style>
