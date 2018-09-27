<template>
      <div class="b_moveCenter">
           <div class="b_moveList" >
              <div class="b-moveshow" v-for= "(movelist,index) in aet" @click="getMovie(movelist.movieId)">

                   <!--<h5  class="ss2">{{movelist.movieType}}</h5>-->
                   <h5  :class="{yelTag:movelist.movieType==('特惠'||'新片'),blueTag:movelist.movieType=='预售'}">{{movelist.movieType}}</h5>
                   <img class="b_move_img" :src=movelist.movieImg >
                   <p>{{movelist.movieName}}</p>
                   <a class="b_aaa"><img :src=movelist.movieScoreImg ><span>{{movelist.movieScore}}</span></a>
              </div>
              <div id="bt_more">
                  全部影片
              </div>
           </div>
           <div class="b_moveCenterlist" >
               <div class="b_moverListShow"  v-for= "movelist in alt" >
                   <p class="cinema-name">{{movelist.movieTheaterName}}</p>
                   <div class="b_moveCenterLocation">
                     <p class="cinema-addr">{{movelist.movieTheaterLocation}}</p>
                     <span class="cinema-space">954m</span>
                   </div>
               </div>
           </div>
           <div class="b_all_moveCenter" >
               <span>全部影院</span><img src="../../assets/image/triangle.png" alt="">
           </div>
      </div>
</template>

<script>
    export default {
        name: "nuoMiMoveCenter",
        props:["aet","alt"],

        data() {
           return {
             classA: 'ss1'
          }
      },
        methods: {
        getMovie(id1){
          this.$router.push({
            name:"nuoMiC2",
            params: {
              id1: id1
            }
          })
        }
      }
    }
</script>

<style scoped>
  .b_moveCenter{
    background:#ffffff;
    padding-top: 0.18rem;
    margin-bottom: 0.1rem;
  }
  .b_moveList{
    display: flex;
    overflow-x:scroll;
    overflow-y: hidden;
    padding: 0 0.15rem;
  }
  .b_moveList::-webkit-scrollbar{
      height: 0;
  }
  .b-moveshow{
    margin-right:0.06rem;
    position: relative;
  }
  .b-moveshow p{
    line-height: 0.29rem;
    font-size:0.13rem ;
    color:#292929 ;
     width: 95%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .b_move_img{
    width:1.1rem ;
    height:1.55rem ;
  }
  .b_aaa{
    display: flex;
    justify-items: center;
    margin-bottom:0.16rem;
  }
  .b-star {
    width: 0.48rem;
    height: 0.09rem;
  }
  .b_aaa span{
    line-height:0.13rem ;
    font-size:0.12rem;
    color: #c29a46;
  }
   #bt_more{
    width: 1.36rem;
    height: 1.55rem;
     padding: 0.44rem 0.11rem;
    box-sizing: border-box;
    border: 2px solid #cacaca;
    text-align: center;
    font-size: 0.12rem;
    color:#363636;
  }
  .b_moveCenterlist{
    padding: 0 0.15rem 0.12rem;
  }
  .cinema-name{
    line-height:0.25rem;
    font-size:0.15rem;
    color:#232323 ;
  }
  .b_moveCenterLocation{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cinema-addr{
    width: 87%;
    line-height: 0.2rem;
    color: #959595;
    font-size: 0.12rem;
    margin-bottom: 0.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cinema-space{
    line-height: 0.2rem;
    color: #959595;
    font-size: 0.12rem;
  }
  .b_all_moveCenter{
    line-height: 0.42rem;
    border-top:2px solid #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .b_all_moveCenter span{
    font-size:0.14rem ;
    color:#9a9a9a ;
  }
  .b_all_moveCenter img{
    margin-left: 0.05rem;
    width:0.1rem ;
    height:0.11rem ;
  }
  .yelTag{
    position: absolute;
    top:0 ;
    right:0;
    width:0.33rem;
    height:0.19rem;
    line-height: 0.19rem;
    text-align: center;
    background: #c29944;
    color: #ffffff;
    font-size: 0.11rem;
  }
  .blueTag{
    position: absolute;
    top:0 ;
    right:0;
    width:0.33rem;
    height:0.19rem;
    line-height: 0.19rem;
    text-align: center;
    background: #4cb3ff;
    color: #ffffff;
    font-size: 0.11rem;
  }


</style>
