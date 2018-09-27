<template>
    <div class="b_cinema1111">
       <div class="b_cinema_list" v-for="cterlist in cter" >
          <p class="b_cinema_title">{{cterlist.movieTheaterName }}</p>
          <div class="b_cinema_space"> <p>{{cterlist.movieTheaterLocation}}</p><span>954m</span></div>
          <p class="b_cinema_dest">座</p>
          <div class="b_cinema_price">
            <img src="../../assets/image/b_c.png" alt="">
            <p class="b_cinema_inf">{{cterlist.movie[0].movieName}}&nbsp;特惠购票|钱包新户立减8元</p>
            <p class="b_cinema_infprice"><span>￥</span><span>{{cterlist.movie[0].movieMoney[0]}}</span>起</p>
          </div>
       </div>

    </div>
</template>

<script>
    export default {
        name: "nuomiallcity",
        props:["cter"]


    }
</script>

<style scoped>
.b_cinema1111{
     letter-spacing: 1px;
     background:#ffffff;
     display: flex;
     flex-direction: column;
}
.b_cinema_list{
     margin-left: 0.15rem;
     width: 92%;
     border-bottom: 1px solid #f4f4f4;
     padding:0.08rem 0.15rem 0.1rem 0;
  }
  .b_cinema_title{
    line-height:0.28rem ;
    color:#1e1e1e;
    font-size:0.16rem ;
  }
  .b_cinema_space{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0.2rem;
    color:#a0a0a0;
    font-size:0.12rem;
  }
  .b_cinema_space p{
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .b_cinema_dest{
     margin: 0.07rem 0;
     width:0.14rem ;
     height:0.14rem ;
     text-align: center;
     line-height: 0.14rem;
     border: 1px solid #fcbe3d;
     font-size:0.1rem ;
     color: #fcbe3d;
     border-radius: 2px;
  }
  .b_cinema_price{
    display: flex;
    align-items: center;
    height: 0.26rem;
  }
  .b_cinema_price img{
    width:0.18rem ;
    height:0.18rem ;
    margin-right: 0.08rem;
  }
  .b_cinema_price .b_cinema_inf{
    width:77%;
    font-size:0.12rem ;
    color:#bdbdbd ;
  }
  .b_cinema_infprice{
    font-size:0.12rem ;
    color:#bdbdbd ;
  }
  .b_cinema_infprice span{
    font-size:0.12rem ;
     color:#a27729;
  }
</style>
