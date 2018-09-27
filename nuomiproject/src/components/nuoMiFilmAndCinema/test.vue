<template>
  <div class="section_two">
    <div class="section_two_top">
      <div class="section_two_top_ul01">
        <div class="section_two_top_cc">
          <a @click="show(1)" :class="{changes:active===1}">全部日期<span></span></a>
          <a @click="show(2)" :class="{changes:active===2}">全城<span></span></a>
          <a @click="show(3)" :class="{changes:active===3}">品牌<span></span></a>
          <a @click="show(4)" :class="{changes:active===4}">筛选<span></span></a>
        </div>
        <div class="section_two_top_dd">
          <div class="section_two_top_tt" v-show="flag ===1">
            <ul>
              <li>全部日期</li>
              <li>今天09.17</li>
              <li>明天09.18</li>
              <li>后天09.19</li>
              <li>周四09.20</li>
              <li>周五09.21</li>
              <li>周六09.22</li>
            </ul>
            <img src="../../assets/image/wallet_personal_trans_refund_up_arrow.png">
          </div>
          <div class="section_two_top_tt" v-show="flag ===2">
            <div class="section_two_top_aa">
              <a @click="show2(1)" :class="{changes2:active2===1}">按商圈</a>
              <a @click="show2(2)" :class="{changes2:active2===2}">按地铁</a>
            </div>
            <div class="section_two_top_bb">
              <div class="section_two_top_ee" v-show="flag2 ===1">
                <ul>
                  <li>全部商圈</li>
                  <li><p>雁塔</p><span>23</span></li>
                  <li><p>未央</p><span>14</span></li>
                  <li><p>碑林</p><span>11</span></li>
                  <li><p>新城</p><span>11</span></li>
                  <li><p>莲湖</p><span>8</span></li>
                  <li><p>长安</p><span>6</span></li>
                </ul>
                <img src="../../assets/image/wallet_personal_trans_refund_up_arrow.png">
              </div>
              <div class="section_two_top_ee" v-show="flag2 ===2">
                <ul>
                  <li>全线</li>
                  <li>地铁2号线</li>
                  <li>地铁1号线</li>
                </ul>
                <img src="../../assets/image/wallet_personal_trans_refund_up_arrow.png">
              </div>
            </div>
          </div>
          <div class="section_two_top_tt" v-show="flag ===3">
            <ul>
              <li>全部品牌</li>
              <li><p>万达国际影城</p><span>10</span></li>
              <li><p>奥斯卡国际影城</p><span>6</span></li>
              <li><p>耀莱成龙国际影城</p><span>4</span></li>
              <li><p>大地影院</p><span>4</span></li>
              <li><p>横店电影城</p><span>3</span></li>
              <li><p>太平洋电影城</p><span>2</span></li>
            </ul>
            <img src="../../assets/image/wallet_personal_trans_refund_up_arrow.png">
          </div>
          <div class="section_two_top_tt" v-show="flag ===4">
            <ul>
              <li>全部品牌</li>
              <li>支持选座</li>
              <li>支持团购</li>
              <li>支持会员卡</li>
              <li>支持商城</li>
              <li>支持特殊厅</li>
              <li>支持改签</li>
            </ul>
            <img src="../../assets/image/wallet_personal_trans_refund_up_arrow.png">
          </div>
        </div>
      </div>
    </div>
    <div class="section_two_bot">
      <div class="section_two_bot_sec">
        <h3>西安万达影城龙城铭园店</h3>
        <a class="section_two_bot_a"><p>陕西省西安市雁塔区丈八北路与科技二路交汇处西北角（消防大队面）5楼万达影城</p><span>1km</span></a>
        <div class="section_two_bot_aa">
          <a>
            <span>￥</span><p>31.9</p><span>起</span><i>钱包新户最高立减8元</i>
          </a>
          <span>座</span>
        </div>
      </div>
      <div class="section_two_bot_sec">
        <h3>西安万达影城龙城铭园店</h3>
        <a class="section_two_bot_a"><p>陕西省西安市雁塔区丈八北路与科技二路交汇处西北角（消防大队面）5楼万达影城</p><span>1km</span></a>
        <div class="section_two_bot_aa">
          <a>
            <span>￥</span><p>31.9</p><span>起</span><i>钱包新户最高立减8元</i>
          </a>
          <span>座</span>
        </div>
      </div>
      <div class="section_two_bot_sec">
        <h3>西安万达影城龙城铭园店</h3>
        <a class="section_two_bot_a"><p>陕西省西安市雁塔区丈八北路与科技二路交汇处西北角（消防大队面）5楼万达影城</p><span>1km</span></a>
        <div class="section_two_bot_aa">
          <a>
            <span>￥</span><p>31.9</p><span>起</span><i>钱包新户最高立减8元</i>
          </a>
          <span>座</span>
        </div>
      </div>
      <div class="section_two_bot_sec">
        <h3>西安万达影城龙城铭园店</h3>
        <a class="section_two_bot_a"><p>陕西省西安市雁塔区丈八北路与科技二路交汇处西北角（消防大队面）5楼万达影城</p><span>1km</span></a>
        <div class="section_two_bot_aa">
          <a>
            <span>￥</span><p>31.9</p><span>起</span><i>钱包新户最高立减8元</i>
          </a>
          <span>座</span>
        </div>
      </div>
      <div class="section_two_bot_sec">
        <h3>西安万达影城龙城铭园店</h3>
        <a class="section_two_bot_a"><p>陕西省西安市雁塔区丈八北路与科技二路交汇处西北角（消防大队面）5楼万达影城</p><span>1km</span></a>
        <div class="section_two_bot_aa">
          <a>
            <span>￥</span><p>31.9</p><span>起</span><i>钱包新户最高立减8元</i>
          </a>
          <span>座</span>
        </div>
      </div>
      <div class="section_two_bot_sec">
        <h3>西安万达影城龙城铭园店</h3>
        <a class="section_two_bot_a"><p>陕西省西安市雁塔区丈八北路与科技二路交汇处西北角（消防大队面）5楼万达影城</p><span>1km</span></a>
        <div class="section_two_bot_aa">
          <a>
            <span>￥</span><p>31.9</p><span>起</span><i>钱包新户最高立减8元</i>
          </a>
          <span>座</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "test",
      data(){
        return{
          flag:0,
          flag2:1,
          active:0,
          active2:1,
        }
      },
      methods:{
        show(f){
          this.flag=f;
          this.active=f;
        },
        show2(f){
          this.flag2=f;
          this.active2=f;
        }
      },
      mounted(){
        $(function(){
          $(".section_two_top_dd img").click(function(){
            $(".section_two_top_dd").css("display","none");
          })
        });
        $(function(){
          $(".section_two_top_cc").click(function(){
            $(".section_two_top_dd").css("display","block");
          })
        })
      }
    }
</script>

<style scoped>

  .section_two{
    margin-top: 0.1rem;
    background: #fff;
  }
  .section_two_top_cc{
    display: flex;
    justify-content: space-between;
    padding: 0 0.15rem;
    border-bottom: 1px solid #f6f6f6;
  }
  .section_two_top_cc a{
    font-size: 0.12rem;
    color: #8b8b8c;
    display: flex;
    align-items: center;
    line-height: 0.38rem;
  }
  .section_two_top_cc a span{
    display: block;
    width: 0.24rem;
    height: 0.24rem;
    background: url("../../assets/image/wallet_personal_trans_refund_down_arrow.png") no-repeat 0 1px;
    background-size: cover;
  }
  .section_two_top_tt ul{
    padding: 0 0.15rem;
  }
  .section_two_top_tt ul li{
    font-size: 0.12rem;
    color: #8b8b8c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 0.35rem;
  }
  .section_two_top_tt img{
    width: 0.36rem;
    height: 0.22rem;
    margin: 0 45%;
  }
  .section_two_top_aa{
    font-size: 0.12rem;
    color: #8b8b8c;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #f6f6f6;
    line-height: 0.38rem;
  }
  .section_two_top_aa a{
    text-align: center;
  }
  .section_two_top_cc .changes{
    color: #202028;
  }
  .section_two_top_cc .changes span{
    display: block;
    width: 0.24rem;
    height: 0.24rem;
    background: url("../../assets/image/wallet_scancode_uparrow.png") no-repeat 7px 10px;
    background-size: 0.1rem 0.05rem;
  }
  .section_two_top_aa .changes2{
    color: #202028;
    border-bottom: 1px solid #000;
  }
  .section_two_bot{

  }
  .section_two_bot_sec{
    padding: 0 0.1rem;
    border-bottom: 1px solid #f6f6f6;
  }
  .section_two_bot_sec h3{
    line-height: 0.3rem;
    margin-top: 0.07rem;
    font-size: 0.16rem;
    color: #000;
    font-weight: 100;
    letter-spacing: 1px;
  }
  .section_two_bot_a{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .section_two_bot_a p{
    width: 85%;
    font-size: 0.12rem;
    color: #6a6a70;
    line-height: 0.23rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 1px;
  }
  .section_two_bot_a span{
    font-size: 0.12rem;
    color: #78787e;
  }
  .section_two_bot_aa{
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 0.39rem;
  }
  .section_two_bot_aa a{
    display: flex;
    align-items: center;
  }
  .section_two_bot_aa a span{
    font-size: 0.12rem;
    color: #c5a15e;
  }
  .section_two_bot_aa a p{
    font-size: 0.16rem;
    color: #b18026;
    margin: 0 0.04rem;
  }
  .section_two_bot_aa a i{
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
  .section_two_bot_aa span{
    font-size: 0.12rem;
    color: #89898e;
  }

</style>
