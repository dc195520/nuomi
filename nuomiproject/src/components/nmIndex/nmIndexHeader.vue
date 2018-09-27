<template>
  <div class="a-headNav">
    <div class="a-head">
      <div class="a-weather">
        <iframe width="100" scrolling="no" height="30" frameborder="0" allowtransparency="true" src="//i.tianqi.com/index.php?c=code&id=1&icon=1&wind=0&num=1&site=14"></iframe>
      </div>
      <p>西安 <img id="imgs" src="../../assets/image/a-angle-down.png"/></p>
      <div class="a-search">
        <img src="../../assets/image/a-search.png"/>
        <p>
          低于四折超值摄影
        </p>
      </div>
      <img class="a-lasts" src="../../assets/image/a-menu.png"/>
      <img class="a-last" src="../../assets/image/a-home.png"/>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="a-nav">
            <div>
              <router-link to="/meishi">
                <img src="../../assets/image/a-nav1.png"/>
                <p>美食</p>
              </router-link>
            </div>
            <div>
              <router-link to="/nuoMiTuiJian">
                <img src="../../assets/image/a-nav2.png"/>
                <p>电影演出</p>
              </router-link>
            </div>
            <div>
              <img src="../../assets/image/a-nav3.png"/>
              <p>外卖</p>
            </div>
            <div>
              <img src="../../assets/image/a-nav4.png"/>
              <p>酒店</p>
            </div>
            <div>
              <img src="../../assets/image/a-nav6.png"/>
              <p>休闲娱乐</p>
            </div>
            <div>
              <img src="../../assets/image/a-nav7.png"/>
              <p>房产</p>
            </div>
            <div>
              <img src="../../assets/image/a-nav8.png"/>
              <p>周边游</p>
            </div>
            <div>
              <img src="../../assets/image/a-nav9.png"/>
              <p>招聘</p>
            </div>
            <div>
              <img src="../../assets/image/a-nav10.png"/>
              <p>火车票机票</p>
            </div>
            <div>
              <img src="../../assets/image/a-nav11.png"/>
              <p>签到</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="a-nav">
            <div>
              <img src="../../assets/image/a-navb1.png"/>
              <p>上门服务</p>
            </div>
            <div>
              <img src="../../assets/image/a-navb02.png"/>
              <p>摄影</p>
            </div>
            <div>
              <img src="../../assets/image/a-navb03.png"/>
              <p>亲子</p>
            </div>
            <div>
              <img src="../../assets/image/a-nav04.png"/>
              <p>运动健身</p>
            </div>
            <div>
              <img src="../../assets/image/a-nav05.png"/>
              <p>KTV</p>
            </div>
            <div>
              <img src="../../assets/image/a-navb06.png"/>
              <p>丽人</p>
            </div>
            <div>
              <img src="../../assets/image/a-navb07.png"/>
              <p>蛋糕</p>
            </div>
            <div>
              <img src="../../assets/image/a-navb08.png"/>
              <p>健康养生</p>
            </div>
            <div>
              <img src="../../assets/image/a-navb09.png"/>
              <p>生活服务</p>
            </div>
            <div>
              <img src="../../assets/image/a-navb10.png"/>
              <p>江浙菜</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="a-nav">
            <div>
              <img src="../../assets/image/a-navc01.png"/>
              <p>水上乐园</p>
            </div>
            <div>
              <img src="../../assets/image/a-navc02.png"/>
              <p>充值中心</p>
            </div>
            <div>
              <img src="../../assets/image/a-navc03.png"/>
              <p>鲜花</p>
            </div>
            <div>
              <img src="../../assets/image/a-navc04.png"/>
              <p>电玩游戏</p>
            </div>
            <div>
              <img src="../../assets/image/a-navc05.png"/>
              <p>个性写真</p>
            </div>
            <div>
              <img src="../../assets/image/a-navc06.png"/>
              <p>洗衣</p>
            </div>
            <div>
              <img src="../../assets/image/a-navc07.png"/>
              <p>川湘菜</p>
            </div>
            <div>
              <img src="../../assets/image/a-navc08.png"/>
              <p>西餐</p>
            </div>
            <div>
              <img src="../../assets/image/a-navc09.png"/>
              <p>烤肉烧烤</p>
            </div>
            <div>
              <img src="../../assets/image/a-navc10.png"/>
              <p>全部分类</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import Swiper from '../../../node_modules/swiper/dist/js/swiper.js';
  import imgs from '../../assets/image/a-search02.png'
  import imgs1 from '../../assets/image/a-search.png'
  export default {
    name: "nmIndexHeader",
    methods:{
      swiper1(){
        let myswiper1=new Swiper(".a-headNav .swiper-container",{
          direction: 'horizontal',
          loop: false,
          effect: 'slide',
        })
      }
    },
    mounted(){
      this.swiper1(),
      $(function(){
        $(window).scroll(function(){
          if( $(window).scrollTop()>0){
            $(".a-weather").css("display","none");
            $(".a-lasts").css("display","none");
            $(".a-last").css("display","none");
            $(".a-head").css("background-color","#fff");
            $(".a-search").css({"width": "2.87rem","border":"none","background-color":"#f5f5f5"})
            $(".a-search img").attr("src",imgs)
          }
          else
          {
            $(".a-weather").css("display","block");
            $(".a-lasts").css("display","block");
            $(".a-last").css("display","block");
            $(".a-head").css("background-color","transparent");
            $(".a-search").css({"width": "1.35rem","border":"0.01rem solid #777777","background-color":"rgba(0,0,0,0)"})
            $(".a-search img").attr("src",imgs1)
          }
        });
      })
    },
    created(){

    }
  }

</script>

<style scoped>
  .a-headNav{
    width: 100%;
    height:2.35rem;
    background: url("../../assets/image/a-headbg.png") no-repeat 0 -0.19rem;
    background-size:100% 2.5rem;
  }
  .a-head{
    width: 100%;
    height:0.45rem;
    box-sizing: border-box;
    display: flex;
    padding-left:0.13rem;
    align-items: center;
    color: #0d0d0d;
    font-size: 0.14rem;
    position: fixed;
    top:0;
    left:0;
    z-index:999;
  }
  .a-head img{
    width: 0.22rem;
    height:0.22rem;
  }
  .a-head .a-weather{
    width: 0.7rem;
    height:0.25rem;
    line-height: 0.25rem;
    border-right:0.01rem solid #d4d4d4;
    margin-right:0.05rem;

  }
  .a-weather iframe{
    margin-left:-0.4rem;
  }
  .a-head p img{
    width: 0.06rem;
    height:0.06rem;
    vertical-align: middle;
    margin-right:0.17rem;
  }
.a-search{
  width: 1.35rem;
  height:0.29rem;
  display: flex;
  border:0.01rem solid #777777;
  border-radius: 0.145rem;
  margin-right:0.15rem;
  background: rgba(0,0,0,0);
}
  .a-search img{
    width: 0.19rem;
    height:0.19rem;
    margin:0.05rem 0.05rem 0.05rem 0.12rem;
  }
  .a-search p{
    width: 100%;
    padding-right:0.2rem;
    height:0.29rem;
    line-height: 0.29rem;
    color: #9d9c9c;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .a-last{
    margin-left:0.15rem;
  }
  .a-nav{
    width: 100%;
    height:1.67rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top:0.61rem;
  }
  .a-nav div{
    width: 20%;
  }
  .a-nav div img{
    width: 0.5rem;
    height:0.5rem;
    margin:0 auto;
    display: block;
  }
  .a-nav div p{
    width: 100%;
    line-height: 0.2rem;
    font-size: 0.12rem;
    color: #7b7b7b;
    text-align: center;
  }
</style>
