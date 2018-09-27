<template>
  <div class="section_three_top">
    <div class="section_three_top_ul01" id="div1">
      <div class="section_three_top_u">
        <div class="section_three_top_cc" id="span">
          <a @click="show(1)" :class="{changes:active===1}">全部日期<span></span></a>
          <a @click="show(2)" :class="{changes:active===2}">全城<span></span></a>
          <a @click="show(3)" :class="{changes:active===3}">品牌<span></span></a>
          <a @click="show(4)" :class="{changes:active===4}">筛选<span></span></a>
        </div>
        <div class="section_three_top_dd">
          <div class="section_three_top_tt" v-show="flag ===1">
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
          <div class="section_three_top_tt" v-show="flag ===2">
            <div class="section_three_top_aa">
              <a @click="show2(1)" :class="{changes2:active2===1}">按商圈</a>
              <a @click="show2(2)" :class="{changes2:active2===2}">按地铁</a>
            </div>
            <div class="section_three_top_bb">
              <div class="section_three_top_ee" v-show="flag2 ===1">
                <div class="section_three_top_gg">
                  <ul class="section_three_uls">
                    <li>全部商圈</li>
                    <li @click="show3(1)" :class="{changes3:active3===1}"><p>雁塔</p><span>23</span></li>
                    <li @click="show3(2)" :class="{changes3:active3===2}"><p>未央</p><span>14</span></li>
                    <li @click="show3(3)" :class="{changes3:active3===3}"><p>碑林</p><span>11</span></li>
                    <li @click="show3(4)" :class="{changes3:active3===4}"><p>新城</p><span>11</span></li>
                    <li @click="show3(5)" :class="{changes3:active3===5}"><p>莲湖</p><span>8</span></li>
                    <li @click="show3(6)" :class="{changes3:active3===6}"><p>长安</p><span>6</span></li>
                    <li @click="show3(7)" :class="{changes3:active3===7}"><p>灞桥</p><span>6</span></li>
                    <li @click="show3(8)" :class="{changes3:active3===8}"><p>临潼</p><span>6</span></li>
                    <li @click="show3(9)" :class="{changes3:active3===9}"><p>户县</p><span>6</span></li>
                    <li @click="show3(10)" :class="{changes3:active3===10}"><p>阎良</p><span>6</span></li>
                    <li @click="show3(11)" :class="{changes3:active3===11}"><p>蓝田</p><span>6</span></li>
                    <li @click="show3(12)" :class="{changes3:active3===12}"><p>高陵</p><span>6</span></li>
                  </ul>
                  <div class="section_three_fen">
                    <div class="section_three_fen_a" v-show="flag3 ===1">
                      <ul>
                        <li><p>全部</p><span>23</span></li>
                        <li><p>其他</p><span>11</span></li>
                        <li><p>小寨</p><span>4</span></li>
                        <li><p>电子城</p><span>2</span></li>
                        <li><p>南郊大学城</p><span>2</span></li>
                        <li><p>大雁塔</p><span>1</span></li>
                        <li><p>高新路</p><span>1</span></li>
                        <li><p>昆明路</p><span>1</span></li>
                        <li><p>唐延路</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===2">
                      <ul>
                        <li><p>全部</p><span>14</span></li>
                        <li><p>其他</p><span>10</span></li>
                        <li><p>凤城一路</p><span>1</span></li>
                        <li><p>龙首村</p><span>1</span></li>
                        <li><p>未央路沿线</p><span>1</span></li>
                        <li><p>张家堡</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===3">
                      <ul>
                        <li><p>全部</p><span>11</span></li>
                        <li><p>其他</p><span>6</span></li>
                        <li><p>边家村</p><span>1</span></li>
                        <li><p>长安路</p><span>1</span></li>
                        <li><p>文艺路</p><span>1</span></li>
                        <li><p>西安交大</p><span>1</span></li>
                        <li><p>小雁塔</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===4">
                      <ul>
                        <li><p>全部</p><span>23</span></li>
                        <li><p>其他</p><span>11</span></li>
                        <li><p>小寨</p><span>4</span></li>
                        <li><p>电子城</p><span>2</span></li>
                        <li><p>南郊大学城</p><span>2</span></li>
                        <li><p>大雁塔</p><span>1</span></li>
                        <li><p>高新路</p><span>1</span></li>
                        <li><p>昆明路</p><span>1</span></li>
                        <li><p>唐延路</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===5">
                      <ul>
                        <li><p>全部</p><span>14</span></li>
                        <li><p>其他</p><span>10</span></li>
                        <li><p>凤城一路</p><span>1</span></li>
                        <li><p>龙首村</p><span>1</span></li>
                        <li><p>未央路沿线</p><span>1</span></li>
                        <li><p>张家堡</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===6">
                      <ul>
                        <li><p>全部</p><span>11</span></li>
                        <li><p>其他</p><span>6</span></li>
                        <li><p>边家村</p><span>1</span></li>
                        <li><p>长安路</p><span>1</span></li>
                        <li><p>文艺路</p><span>1</span></li>
                        <li><p>西安交大</p><span>1</span></li>
                        <li><p>小雁塔</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===7">
                      <ul>
                        <li><p>全部</p><span>23</span></li>
                        <li><p>其他</p><span>11</span></li>
                        <li><p>小寨</p><span>4</span></li>
                        <li><p>电子城</p><span>2</span></li>
                        <li><p>南郊大学城</p><span>2</span></li>
                        <li><p>大雁塔</p><span>1</span></li>
                        <li><p>高新路</p><span>1</span></li>
                        <li><p>昆明路</p><span>1</span></li>
                        <li><p>唐延路</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===8">
                      <ul>
                        <li><p>全部</p><span>14</span></li>
                        <li><p>其他</p><span>10</span></li>
                        <li><p>凤城一路</p><span>1</span></li>
                        <li><p>龙首村</p><span>1</span></li>
                        <li><p>未央路沿线</p><span>1</span></li>
                        <li><p>张家堡</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===9">
                      <ul>
                        <li><p>全部</p><span>11</span></li>
                        <li><p>其他</p><span>6</span></li>
                        <li><p>边家村</p><span>1</span></li>
                        <li><p>长安路</p><span>1</span></li>
                        <li><p>文艺路</p><span>1</span></li>
                        <li><p>西安交大</p><span>1</span></li>
                        <li><p>小雁塔</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===10">
                      <ul>
                        <li><p>全部</p><span>23</span></li>
                        <li><p>其他</p><span>11</span></li>
                        <li><p>小寨</p><span>4</span></li>
                        <li><p>电子城</p><span>2</span></li>
                        <li><p>南郊大学城</p><span>2</span></li>
                        <li><p>大雁塔</p><span>1</span></li>
                        <li><p>高新路</p><span>1</span></li>
                        <li><p>昆明路</p><span>1</span></li>
                        <li><p>唐延路</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===11">
                      <ul>
                        <li><p>全部</p><span>14</span></li>
                        <li><p>其他</p><span>10</span></li>
                        <li><p>凤城一路</p><span>1</span></li>
                        <li><p>龙首村</p><span>1</span></li>
                        <li><p>未央路沿线</p><span>1</span></li>
                        <li><p>张家堡</p><span>1</span></li>
                      </ul>
                    </div>
                    <div class="section_three_fen_a" v-show="flag3 ===12">
                      <ul>
                        <li><p>全部</p><span>11</span></li>
                        <li><p>其他</p><span>6</span></li>
                        <li><p>边家村</p><span>1</span></li>
                        <li><p>长安路</p><span>1</span></li>
                        <li><p>文艺路</p><span>1</span></li>
                        <li><p>西安交大</p><span>1</span></li>
                        <li><p>小雁塔</p><span>1</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <img src="../../assets/image/wallet_personal_trans_refund_up_arrow.png">
              </div>
              <div class="section_three_top_ee" v-show="flag2 ===2">
                <ul>
                  <li>全线</li>
                  <li>地铁2号线</li>
                  <li>地铁1号线</li>
                </ul>
                <img src="../../assets/image/wallet_personal_trans_refund_up_arrow.png">
              </div>
            </div>
          </div>
          <div class="section_three_top_tt" v-show="flag ===3">
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
          <div class="section_three_top_tt" v-show="flag ===4">
            <ul class="section_three_top_tt_ul">
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
  </div>
</template>

<script>
    export default {
        name: "nuoMiC2SectionThreeTop",
      data(){
        return{
          flag:0,
          flag2:1,
          flag3:0,
          active:0,
          active2:1,
          active3:0
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
        },
        show3(f){
          this.flag3=f;
          this.active3=f;
        }
      },
      mounted(){
        $(function(){
          $(".section_three_top_dd img").click(function(){
            $(".section_three_top_dd").css("display","none");
          })
        });
        $(function(){
          $(".section_three_top_cc").click(function(){
            $(".section_three_top_dd").css("display","block");
          });
        });
        $(function(){
          $(".section_three_uls li").click(function(){
            $(".section_three_uls").css("width","50%");
            $(".section_three_uls li").css("borderRight","1px solid #f6f6f6");
            $(".section_three_fen").css({
              "display":"block",
              "width":"50%"
            })
          });
        });
        //吸顶效果
        $(function () {
          var ie6 = document.all;
          var dv = $('#div1');
          var st;
          dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
          $(window).scroll(function () {
            st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (st > parseInt(dv.attr('otop'))) {
              if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
                dv.css({ position: 'absolute', top: st });
              }else if (dv.css('position') != 'fixed') dv.css({ 'position': 'fixed', top: "0.46rem"});
            }else if (dv.css('position') != 'static') dv.css({ 'position': 'static', 'border-bottom': 'none' });
          });
        });
      }
    }
</script>

<style scoped>
  .section_three_top_ul01{
    width: 100%;
    background: #fff;
  }
  .section_three_top_u{
    position: relative;
  }
  .section_three_top_cc{
    display: flex;
    justify-content: space-between;
    padding: 0 0.15rem;
    border-bottom: 1px solid #f6f6f6;
  }
  .section_three_top_cc a{
    font-size: 0.12rem;
    color: #8b8b8c;
    display: flex;
    align-items: center;
    line-height: 0.38rem;
  }
  .section_three_top_cc a span{
    display: block;
    width: 0.24rem;
    height: 0.24rem;
    background: url("../../assets/image/wallet_personal_trans_refund_down_arrow.png") no-repeat 0 1px;
    background-size: cover;
  }
  .section_three_top_tt ul{

  }
  .section_three_top_tt ul li{
    padding: 0 0.15rem;
  }
  .section_three_top_tt ul li{
    font-size: 0.12rem;
    color: #8b8b8c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 0.35rem;
  }
  .section_three_top_tt img{
    width: 0.36rem;
    height: 0.22rem;
    margin: 0 45%;
  }
  .section_three_top_aa{
    font-size: 0.12rem;
    color: #8b8b8c;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #f6f6f6;
    line-height: 0.38rem;
  }
  .section_three_top_aa a{
    text-align: center;
  }
  .section_three_top_cc .changes{
    color: #202028;
  }
  .section_three_top_cc .changes span{
    display: block;
    width: 0.24rem;
    height: 0.24rem;
    background: url("../../assets/image/wallet_scancode_uparrow.png") no-repeat 7px 10px;
    background-size: 0.1rem 0.05rem;
  }
  .section_three_top_aa .changes2{
    color: #202028;
    border-bottom: 2px solid #000;
  }
  .section_three_top_dd{
    width: 100%;
    position: absolute;
    top: 0.39rem;
    background: #fff;
  }
  .section_three_uls{
    max-height: 2.36rem;
    overflow-y: scroll;
    width: 100%;
  }
  .section_three_top_gg{
    width: 100%;
    display: flex;
  }
  .section_three_fen{
    display: none;
    width: 50%;
  }
  .section_three_fen_a{
    max-height: 2.36rem;
    overflow-y: scroll;
  }
  .section_three_uls .changes3{
    border-top: 1px solid #f6f6f6;
    border-bottom: 1px solid #f6f6f6;
    border-right: 1px solid transparent!important;
    background: url("../../assets/image/yu28.png") no-repeat 0px 0px;
    background-size: 0.03rem 0.35rem;
    color: #202028;
  }
</style>
