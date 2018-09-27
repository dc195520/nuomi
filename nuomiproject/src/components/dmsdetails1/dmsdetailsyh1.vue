<template>
<div>
  <div class="d4_yh">
    <div class="d4_yhtop">
      本店优惠
    </div>
    <div class="d4_yhbottom" v-if="id23.ProductDetails[0]==null" v-for="k in id23.ProductDetails[0].preferentialOne" :key="k.id">
      <div class="d4_yhbottom1">
        <img :src=k.preferentialOneImg alt="">
        <div class="d4_yhbottom2">
          <h3>{{ k.one1Name}}</h3>
          <p>{{k.one1UseTime}}</p>
        </div>
      </div>
      <div class="d4_yhbottom3">
        优惠买单
      </div>
    </div>
    <div class="d4_yhbottom" v-if="id23.ProductDetails[0]==null" v-for="j in id23.ProductDetails[0].preferentialTwo" :key="j.id">
      <div class="d4_yhbottom1">
        <img :src=j.preferentialTwoImg alt="">
        <div class="d4_yhbottom2">
          <h3>{{ j.two1Name}}</h3>
          <p class="pp">￥{{j.two1Price}}<del>{{j.two1Del}}</del></p>
        </div>
      </div>
      <div class="d4_yhbottom4">
        <p>购买</p>
        <span>已售{{j.twosh}}</span>
      </div>
    </div>
  </div>
  <!-- d4_kx -->
  <div class="d4_kx">
  </div>
</div>
</template>

<script>
    export default {
        name: "dmsdetailsyh",
      props:["id23"]
    }
</script>

<style scoped>
  .d4_yh{
    width: 100%;
    /* height: 1.72rem; */
  }
  .d4_yhtop{
    height: 0.4rem;
    background: #fff;
    font-size: 0.14rem;
    color: #0c0c0c;
    line-height: 0.4rem;
    text-align: center;
    border-bottom: 1px solid #f3f6f5;
  }
  .d4_yhbottom{
    display: flex;
    justify-content: space-between;
    height: 0.66rem;
    padding: 0 0.15rem;
    background: #fff;
    border-bottom: 1px solid #f3f6f5;

  }
  .d4_yhbottom1{
    display: flex;
    margin-top: 0.14rem;
    margin-bottom: 0.09rem;
  }
  .d4_yhbottom1 img{
    width: 0.2rem;
    height: 0.2rem;
  }
  .d4_yhbottom2{
    margin-left: 0.12rem;
  }
  .d4_yhbottom2 h3{
    font-size: 0.13rem;
    color: #111111;
  }
  .d4_yhbottom2 p{
    font-size: 0.13rem;
    color: #b7b7b7;
    margin-top: 0.13rem;
  }
  .d4_yhbottom2 .pp{
    color: #ae8a47;
  }
  .d4_yhbottom2 .pp del{
    color: #a8a8a8;
    font-size: 0.1rem;
  }
  .d4_yhbottom3{
    margin-top: 0.2rem;
    width: 0.88rem;
    height: 0.3rem;
    border-radius: 0.15rem ;
    border: 1px solid #b4852e;
    background: #bf974d;
    font-size: 0.14rem;
    color: #fbf8f3;
    line-height: 0.3rem;
    text-align: center;
  }

  .d4_yhbottom4{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.14rem;

  }
  .d4_yhbottom4 p{
    width: 0.54rem;
    height: 0.25rem;
    border-radius: 0.12rem;
    border:1px solid #e0d2b9;
    font-size: 0.12rem;
    color: #e0d2b9;
    text-align: center;
    line-height: 0.25rem;
  }
  .d4_yhbottom4 span {
    color: #a3a3a3;
    font-size: 0.12rem;
    display: block;
    margin-top: 0.06rem ;
  }

</style>
