<template>
  <div>
    <!--section_three-->
    <div class="section_three">
      <h3>热门排行榜</h3>
      <a v-for="i in date1" @click="getMovie(i.movie[0].movieId)">
        <div class="section_three_left">
          <img :src="i.movie[0].movieImg">
          <span>1</span>
        </div>
        <div class="section_three_right">
          <p>{{i.movie[0].movieName}}</p>
          <span>座</span>
          <div class="section_three_time">
            <img src="../../assets/image/yc11.png" alt="">
            <p>{{i.movie[0].movieShowTime}}</p>
          </div>
          <div class="section_three_address">
            <img src="../../assets/image/yc12.png" alt="">
            <p>{{i.movieTheaterName}}</p>
          </div>
          <div class="section_three_price">
            <p>{{i.movie[0].movieMoney1}}</p>
            <b><i>{{i.movie[0].movieZhe}}</i><i>{{i.movie[0].movieType}}</i></b>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "nuoMiC1SectionThree",
      props:["date1"],
      methods:{
        getMovie(id2){
          this.$router.push({
            name: 'nuoMiC3',
            params:{
              id2: id2
            }
          });
          console.log("id2:"+id2)
        }
      }
    }
</script>

<style scoped>
  .section_three{
    background: #fff;
    margin-top: 0.1rem;
    margin-bottom: 0.5rem;
  }
  .section_three h3{
    font-size: 0.16rem;
    color: #000;
    padding-top: 0.13rem;
    margin: 0 0.1rem;
  }
  .section_three a{
    display: flex;
    justify-content: space-between;
    padding: 0.12rem 0;
    border-bottom: 1px solid #f5f5f5;
  }
  .section_three_left{
    position: relative;
    margin-left: 0.1rem;
  }
  .section_three_left img{
    width: 0.82rem;
    height: 1.1rem;
  }
  .section_three_left span{
    font-size: 0.12rem;
    color: #fff;
    width: 0.17rem;
    height: 0.17rem;
    display: block;
    text-align: center;
    line-height: 0.17rem;
    background: #ff5757;
    position: absolute;
    left: 0;
    top: 0;
  }
  .section_three a:nth-child(3) .section_three_left span{
    background: #ff7b13;
  }
  .section_three a:nth-child(4) .section_three_left span{
    background: #f4c15e;
  }
  .section_three_right{
    width: 74%;
    margin: 0 0.1rem;
  }
  .section_three_right p{
    font-size: 0.15rem;
    color: #000;
  }
  .section_three_right span{
    font-size: 0.14rem;
    color: #fff;
    display: block;
    width: 0.17rem;
    height: 0.18rem;
    background: #ff1b07;
    border-radius: 0.03rem;
    text-align: center;
    line-height: 0.18rem;
    margin: 0.03rem 0 0 0.02rem;
  }
  .section_three_time{
    display: flex;
    margin-top: 0.1rem;
  }
  .section_three_time img{
    width: 0.15rem;
    height: 0.14rem;
  }
  .section_three_time p{
    font-size: 0.12rem;
    color: #5a5a5a;
    line-height: 0.18rem;
  }
  .section_three_address{
    display: flex;
  }
  .section_three_address img{
    width: 0.15rem;
    height: 0.17rem;
  }
  .section_three_address p{
    font-size: 0.12rem;
    color: #5a5a5a;
    line-height: 0.21rem;
  }
  .section_three_price{
    display: flex;
    justify-content: space-between;
  }
  .section_three_price p{
    color: #b68832;
    font-size: 0.16rem;
    line-height: 0.2rem;
  }
  .section_three_price b{
    display: flex;
    font-weight: 100;
  }
  .section_three_price b i:first-child{
    color: #c7a363;
    font-size: 0.1rem;
    display: block;
    border: 1px solid #ff89b0;
    width: 0.32rem;
    height: 0.17rem;
    border-radius: 0.02rem;
    font-style: normal;
    text-align: center;
    line-height: 0.17rem;
  }
  .section_three_price b i:last-child{
    color: #ff8300;
    font-size: 0.1rem;
    display: block;
    border: 1px solid #ffb464;
    width: 0.4rem;
    height: 0.17rem;
    border-radius: 0.02rem;
    font-style: normal;
    text-align: center;
    line-height: 0.17rem;
    margin-left: 0.05rem;
  }
</style>
