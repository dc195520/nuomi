<template>
  <div>
    <!--section_one-->
    <div class="section_one">
      <div class="section_one_top">
        <a><img src="../../assets/image/yc01.png" alt="">演唱会</a>
        <a><img src="../../assets/image/yc02.png" alt="">话剧舞台剧</a>
        <a><img src="../../assets/image/yc03.png" alt="">儿童亲子</a>
        <a><img src="../../assets/image/yc04.png" alt="">小型现场</a>
        <a><img src="../../assets/image/yc05.png" alt="">更多</a>
      </div>
      <div class="section_one_bot">
        <h3>重磅推荐</h3>
        <div id="container">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="swiper-slide games">DMCx RedBull 3style双冠王 DJ AFRO巡演 西安站</swiper-slide>
            <swiper-slide class="swiper-slide games">开心麻花爆笑舞台剧《乌龙山伯爵》</swiper-slide>
            <swiper-slide class="swiper-slide games">开心麻花爆笑舞台剧《莎士比亚别生气》</swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
      name: "nuoMiC1SectionOne",
      data () {
        return {
          swiperOption: {
            autoplay : {
              disableOnInteraction: false, //用户操作后是否禁止自动循环
              delay: 1000 //自自动循环时间
            }, //可选选项，自动滑动
            direction:'vertical',
            speed: 200, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
            loop:true, //循环切换
            grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
            // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
            autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
            scrollbar: '.swiper-scrollbar',
            observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
          },
          computed: {
            swiper() {
              return this.$refs.mySwiper.swiper
            }
          }
        }
      }
    }
</script>

<style scoped>
  .section_one{
    background: #fff;
    margin-top: 0.45rem;
  }
  .section_one_top{
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    height: 0.92rem;
    align-items: center;
    border-bottom: 1px solid #fafafa;
    letter-spacing: 1px;
  }
  .section_one_top a{
    font-size: 0.14rem;
    color: #565656;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section_one_top a img{
    width: 0.44rem;
    height: 0.43rem;
  }
  .section_one_bot{
    padding: 0 0.1rem;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }
  .section_one_bot h3{
    font-size: 0.16rem;
    font-style: italic;
    line-height: 0.38rem;
    color: #ff000e;
  }
  #container{
    width: 75%;
    height: 0.38rem;
    margin-left: 0.2rem;
    overflow: hidden;
  }
  .swiper-slide{
    width: 100%;
    height: 0.38rem;
    line-height: 0.38rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0;
  }
</style>
