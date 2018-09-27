<template>
  <div class="b-nuoMi-show">
    <div class="b-nuoMi-show-top">
      <p>优质特惠</p>
      <div class="b_nuoMi_show_top_more">
        <span>更多</span><img src="../../assets/image/triangle.png" alt="">
      </div>
    </div>
    <div class="b-nuoMi-show-list">
        <div class="b-nuoMi-show-list1" v-for= "pricelist in priceest"  @click="getMovie(pricelist.movieId)">
           <div class="b_mov_Rebate" >
            5折
           </div>
            <img :src=pricelist.movieImg  >
            <p class="p-name">{{pricelist.movieIntro}}</p>
           <div class="b-nuoMi-show-list2">
              <span>￥</span><p>{{pricelist.movieMoney[0]}}</p><span>起</span>
           </div>
        </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "nuoMigoodspe",
       props:["priceest"],
       methods: {
        getMovie(id1){
          this.$router.push({
            name:"nuoMiC2",
            params: {
              id1: id1
            }
          })
          console.log(id1)
        }
      }
    }
</script>

<style scoped>
  .b-nuoMi-show{
    margin-bottom: 0.1rem;
    background: #ffffff;

  }
  .b-nuoMi-show-top{
    padding: 0 0.15rem;
    display:flex;
    justify-content: space-between;
    line-height:0.48rem;
    align-items:center;
  }
  .b-nuoMi-show-top p{
    font-size:0.18rem;
    color:#080808 ;
  }
  .b_nuoMi_show_top_more{
    display: flex;
    align-items: center;
  }
  .b_nuoMi_show_top_more span{
    font-size:0.12rem;
    color:#b1b1b1 ;
  }
  .b_nuoMi_show_top_more img{
    width:0.07rem;
    height:0.12rem;
    margin-left: 0.05rem;
  }
  .b-nuoMi-show-list{
    padding-left: 0.15rem;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .b-nuoMi-show-list1{
    margin-right: 0.06rem;
    position: relative;
  }
  .b_mov_Rebate{
     position: absolute;
     top: 0;
     right: 0;
     width:0.28rem;
     height:0.18rem;
     line-height:0.18rem;
     color:#ffffff;
     background:#c29443;
     font-size:0.12rem;
     text-align: center;
  }
  .b-nuoMi-show-list1 img{
    width: 1.1rem;
    height: 1.54rem;
  }
  .p-name{
    width: 95%;
    line-height:0.22rem ;
    font-size:0.14rem ;
    color:#1d1d1d ;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

  }
  .b-nuoMi-show-list2{
     display: flex;
     line-height:0.14rem;
     color:#c09950;
     font-size:0.12rem;
     margin-top: 0.03rem;
     margin-bottom: 0.13rem;
  }
  .b-nuoMi-show-list2 span{
    margin: 0 0.05rem;
  }
  .b-nuoMi-show-list::-webkit-scrollbar{
    height: 0;
  }
  /*.b-nuoMi-show-list .b-nuoMi-show-list1:last-child{*/
    /*padding-right:0.15rem;*/
  /*}*/
</style>
