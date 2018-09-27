<template>
   <div class="b_Nav">
       <div class="b-tnav">
           <a>
               <img src="../../assets/image/b-nav1.png" alt="">
              <p>会员卡</p>
           </a>
           <a>
               <img src="../../assets/image/b-nav2.png" alt="">
               <p>商城</p>
            </a>
           <a>
               <img src="../../assets/image/b-nav3.png" alt="">
               <p>视频</p>
             </a>
           <a>
                <img src="../../assets/image/b-nav4.png" alt="">
               <p>票房</p>
            </a>

       </div>
       <div class="b_t_tuijian">
         <div class="b_tint">
            <div class="b_tint_t">
              <h5>大片热映</h5>
              <h6>想看电影</h6>
            </div>
           <img src="../../assets/image/nvin2.png" alt="">
         </div>
         <div class="b_tint">
           <div class="b_tint_t">
              <h5>特惠冲刺</h5>
              <h6>快乐看演出</h6>
           </div>
           <img src="../../assets/image/nvin1.png" alt="">
         </div>
       </div>


   </div>

</template>

<script>
    export default {
        name: "nuoMiTuiJianNav"
    }
</script>

<style scoped>
  .b_Nav{
    background:#ffffff;
    margin-bottom: 0.1rem;
  }
  .b-tnav{
    display: flex;
    border-bottom: 2px solid #f5f5f5;
  }
  .b-tnav a{
    flex: 1;
  }
  .b-tnav img{
    width: 0.32rem;
    height: 0.32rem;
    margin:0.16rem  0.3rem  0 ;
  }
  .b-tnav p{
    text-align: center;
    line-height:0.26rem;
    font-size: 0.13rem;
    color:#2c2c2c;
    margin:0.04rem  0  0.06rem;
  }
  .b_t_tuijian{
    height: 0.64rem;
    display: flex;
    background: url(../../assets/image/b_nav_bg.png) repeat-y center top;
  }
  .b_tint{
    display: flex;
    width: 50%;
    justify-content: space-between;
    padding: 0.08rem 0.22rem 0.08rem 0.12rem;
  }
  .b_tint img{
     width: 0.47rem;
     height: 0.47rem;
  }
  .b_tint_t{
    display: flex;
    flex-direction: column;
  }
  h5 ,h6{
    font-weight: 100;
  }
  .b_tint_t h5{
    line-height:0.26rem;
    font-size:0.15rem ;
    color:#080808;
  }
  .b_tint_t h6{
    line-height:0.18rem;
    font-size:0.12rem ;
    color:#a4a4a4;
  }
</style>
