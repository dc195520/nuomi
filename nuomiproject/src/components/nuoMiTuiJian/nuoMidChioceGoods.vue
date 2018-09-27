<template>
  <div class="b-nuoMi-show">
    <div class="b-nuoMi-show-top">
      <p>精选商品</p>
      <div class="b_nuoMi_show_top_more">
        <span>更多</span><img src="../../assets/image/triangle.png" alt="">
      </div>
    </div>
    <div class="b-nuoMi-show-listest">
        <div class="b-nuoMi-show-listest1" v-for= "pricelist in priceest">
          <img :src=pricelist.movieImg >
          <p class="p-name">{{pricelist.movieName}}</p>
           <div class="b-nuoMi-show-list2">
          <span>￥</span><p>{{pricelist.movieMoney[0]}}</p>
        </div>
       </div>


    </div>
  </div>
</template>

<script>
    export default {
        name: "nuoMidChioceGoods",
        props:["priceest"],
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
  .b-nuoMi-show-listest{
    padding-left: 0.15rem;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .b-nuoMi-show-listest1{
     margin-right: 0.06rem;
     width: 32%;
  }
  .b-nuoMi-show-listest1 img{
    width: 1.1rem;
    height: 1.54rem;
  }
  .p-name{
    line-height:0.22rem ;
    font-size:0.14rem ;
    color:#1d1d1d ;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;

  }
  .b-nuoMi-show-list2{
    display: flex;
    line-height:0.14rem;
    color:#c09950;
    font-size:0.12rem;
    margin-bottom: 0.08rem;
  }
  .b-nuoMi-show-list2 span{
    margin: 0 0.05rem;
  }
  .b-nuoMi-show-listest::-webkit-scrollbar{
    height: 0;
  }
  .b-nuoMi-show-listest  .b-nuoMi-show-listest1:last-child{
    padding-right: 0.15rem;
  }
</style>
