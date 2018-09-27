<template>
   <div>
     <div class="sp_last">
       <img class="b_last" src="../../assets/image/b_last.png" alt="">
       <div class="sp_last_space">
          支付剩余时间 :&nbsp;
       </div>
       <div class="sp_last_time">
           <span id="car_time"></span>
       </div>
     </div>
     <div class="b_confirmesss">
         <div class="b_pay_filem">
           <p class="b_pay_filem_title">{{date.movieName}}</p>
           <p class="b_pay_filem_store">{{date.movieTheaterNamesd}}</p>
           <div class="b_pay_filem_time">
              <span class="b_date"></span><span class="b_pay_filem_time1">{{date.movieTimeS}}-{{date.movieTimeE}}</span><span>{{date.movieLanguage}}</span>
           </div>
           <div class="b_pay_filem_seat">
              <p>6号厅-</p>
              <span>8排8座</span>
           </div>
         </div>
         <div class="b_pay_filem_coupons">
           <p>优惠和抵用券</p>
           <div class="b__no_coupons "><span>无可用优惠</span><img src="../../assets/image/b_paymore.png" alt=""></div>
         </div>
         <div class="b_pay_filem_coupons">
           <p>商家优惠</p>
           <div class="b__no_coupons "><span>无可用优惠</span><img src="../../assets/image/b_paymore.png" alt=""></div>
         </div>
         <div  class="b_pay_filem_num">
            <div class="b_pay_filem_num_top">
              <span class="b_pay_filem_num_top1">小计</span>
              <p class="b_pay_filem_num_top2">￥<span class="b_pricenum"></span></p>
            </div>
            <div class="b_pay_filem_num_bot">
                <p>￥<span class="b_preprice">35</span>x<span class="b_num">3</span>张（已含服务费）</p>
            </div>
         </div>
          <div class="b_pay_notice">
            <p><img src="../../assets/image/b_notice.png" ><span>该场次不可改签</span></p>
            <p><img src="../../assets/image/b_notice.png" ><span>该场次不可退票</span></p>
          </div>
     </div>
     <div class="b_last_phone">
        <div class="b_last_phone_top">
             <span>151****1234</span>
             <img src="../../assets/image/b_write_phone.png" alt="">
        </div>
        <p class="b_no_send">取票码短信不再自动发送，请到订单中心查看</p>
     </div>
   </div>
</template>

<script>
    export default {
        name: "nuoMiConfirmSection",
       props:["date"],
        created(){
           $(function(){
          var minutes=9;
          var seconds=0;
          var ms=0;
          var myTimer=null;
          setInterval(function(){
            ms--;
            if(ms<0){
              seconds--;
              ms=9;
            }
            if(seconds<0){
              minutes--;
              seconds=59;
            }
            if(minutes<0){
              minutes=0;
              seconds=0;
              ms=0;
            }
            $('#car_time').html(("0"+minutes).toString().substr(-2)+":"+("0"+seconds).toString().substr(-2));
          },100)
        });
           $(function(){
            let a=parseInt($(".b_preprice").html())
            let b=parseInt($(".b_num").html())
            let c=parseInt(a*b)
            $(".b_pricenum").html(c)
          });
        }
    }

    function getDate() {
      var today = new Date();
      var date = today.getFullYear() + "年" + twoDigits(today.getMonth() + 1) + "月" + twoDigits(today.getDate()) + "日 ";
      var week = "(周" + "日一二三四五六 ".charAt(today.getDay())+")";
      var time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes()) + ":" + twoDigits(today.getSeconds());
      $(".b_date").html(date + week );
    }
    function twoDigits(val) {
      if (val < 10) return "0" + val; return val;
    }
    $(function () {
      setInterval(getDate, 1000);
    });


</script>

<style scoped>
  .sp_last{
    width: 100%;
    line-height:0.36rem ;
    background:#fff4cd ;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sp_last_space{
    margin:0  0.02rem;
  }
  .b_last{
    width: 0.18rem;
    height: 0.18rem;
  }
  .b_confirmesss{
    background: #ffffff;
    margin-bottom: 0.1rem;
  }
  .b_pay_filem{
    margin-left: 0.15rem;
    width: 92%;
    padding-right: 0.15rem;
    border-bottom: 1px solid #f5f5f5;
    padding-top: 0.09rem;
    padding-bottom: 0.11rem;
  }
  .b_pay_filem_title{
    line-height: 0.29rem;
    font-size:0.15rem;
    color:#101010 ;
  }
  .b_pay_filem_store{
    line-height: 0.22rem;
    font-size:0.12rem;
    color:#828282 ;
    letter-spacing: 1px;
  }
  .b_pay_filem_time{
    line-height:0.2rem ;
    font-size:0.12rem ;
    color:#c49f5a ;
    letter-spacing: 1px;
  }
  .b_pay_filem_time1{
    margin: 0 0.07rem;
  }
  .b_pay_filem_seat{
    display: flex;
    line-height: 0.22rem;
    align-items: center;
    font-size:0.12rem ;
    color:#b2b2b2 ;
  }
  .b_pay_filem_coupons{
    margin-left: 0.15rem;
    width: 92%;
    padding-right: 0.15rem;
    border-bottom: 1px solid #f5f5f5;
     display: flex;
    justify-content: space-between;
    line-height: 0.39rem;
    font-size: 0.13rem;
    color: #555555;
  }
  .b__no_coupons{
    color: #bbbbbb;
  }
  .b__no_coupons img{
    width:0.05rem ;
    height:0.09rem ;
    margin-left: 0.06rem;
  }
  .b_pay_filem_num{
    margin-left: 0.15rem;
    width: 92%;
    padding:0.08rem 0.15rem 0.11rem 0;
    border-bottom: 1px solid #f5f5f5;
  }
  .b_pay_filem_num_top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0.30rem;
    font-size: 0.13rem;
  }
  .b_pay_filem_num_top1{
   color:#595961;
  }
  .b_pay_filem_num_top2{
     color: #b49255;
  }
  .b_pay_filem_num_bot{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 0.19rem;
    font-size:0.12rem ;
    color:#aeaeae ;
  }
  .b_pay_notice{
    margin-left: 0.15rem;
    width: 92%;
    padding-right: 0.15rem;
    display: flex;
    align-items: center;
    line-height:0.35rem;
    font-size:0.13rem;
    color:#919191;
  }
  .b_pay_notice p img{
    width:0.14rem ;
    height:0.14rem ;
    margin-right: 0.05rem;
  }
  .b_pay_notice p span{
    line-height:0.35rem;
    padding-right: 0.24rem;
  }
  .b_last_phone{
    background: #ffffff;
  }
  .b_last_phone_top{
    margin-left: 0.15rem;
    width: 92%;
    padding-right: 0.15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height:0.4rem ;
    border-bottom: 1px solid #f5f5f5;
  }
  .b_last_phone_top span{
     color:#2c2c37 ;
     font-size:0.15rem ;
  }
  .b_last_phone_top img{
    width:0.18rem;
    height:0.18rem;
  }
  .b_no_send{
    margin-left: 0.15rem;
    line-height:0.35rem ;
    font-size:0.12rem ;
    color:#c3c3c3 ;
  }
</style>
