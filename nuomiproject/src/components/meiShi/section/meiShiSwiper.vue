<template>
    <div>
        <div class="e_banner">
            <img src="../../../assets/images/ms-banner.png" alt="">
        </div>
        <!-- <div class="e_swiper" >
            <div class="e_swiperLeft">
                <img src="../../../assets/images/s_1.png" alt="">
            </div>
            <div class="e_swiperRight">
                <div class="e_swiperWord">
                    <p>美食头条 | 无限量吃喝玩乐！全国首家健康自然畅饮吧终于来西安了！</p>
                    <span>14544人浏览</span>
                </div>
                <div class="e_swiperNext"> 
                    <img src="../../../assets/images/native_home_headline_arrow_right.png" alt="">
                </div>
            </div>
        </div> -->
        <div id="container">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide > 
                    <!-- @mouseenter.native="stopPlay" @mouseleave.native="play" -->
                    <div class="e_swiper" >
                        <div class="e_swiperLeft">
                            <img src="../../../assets/images/s_1.png" alt="">
                        </div>
                        <div class="e_swiperRight">
                            <div class="e_swiperWord">
                                <p>美食头条 | 无限量吃喝玩乐！全国首家健康自然畅饮吧终于来西安了！</p>
                                <span>14544人浏览</span>
                            </div>
                            <div class="e_swiperNext"> 
                                <img src="../../../assets/images/native_home_headline_arrow_right.png" alt="">
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide >
                    <div class="e_swiper" >
                        <div class="e_swiperLeft">
                            <img src="../../../assets/images/s_2.png" alt="">
                        </div>
                        <div class="e_swiperRight">
                            <div class="e_swiperWord">
                                <p>美食头条 | 南门这家店要被挤爆啦！在不来你就out了。</p>
                                <span>9497人浏览</span>
                            </div> 
                            <div class="e_swiperNext"> 
                                <img src="../../../assets/images/native_home_headline_arrow_right.png" alt="">
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide >
                    <div class="e_swiper" >
                        <div class="e_swiperLeft">
                            <img src="../../../assets/images/s_3.png" alt="">
                        </div>
                        <div class="e_swiperRight">
                            <div class="e_swiperWord">
                                <p>美食头条 | 无限量吃喝玩乐！全国首家健康自然畅饮吧终于来西安了！</p>
                                <span>14544人浏览</span>
                            </div>
                            <div class="e_swiperNext"> 
                                <img src="../../../assets/images/native_home_headline_arrow_right.png" alt="">
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
                <!--<div class="swiper-button-next" slot="button-next"></div>-->
            </swiper>
        </div>
    </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'meiShiSwiper',
   data () {
        return { 
          swiperOption: {
            autoplay : {//可选选项，自动滑动
              disableOnInteraction: false, //用户操作后是否禁止自动循环
              delay: 3000 //自动循环时间
            }, 
            speed: 300, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
            loop:true, //循环切换
            autoplayDisableOnInteraction:true, //和loop联合使用，形成无缝轮播
            direction:'vertical',
            grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
            // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
            // autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
            scrollbar: '.swiper-scrollbar',
            mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
            observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper

            pagination: {
              el: '.swiper-pagination',
              // type : 'progressbar', //分页器形状
              clickable :true, //点击分页器的指示点分页器会控制Swiper切换
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          computed: {
            swiper() {
              return this.$refs.mySwiper.swiper
            }
          }
        }
      },
//   data(){
//       return{
//           swiperOption:{
//             notNextTick:true, //可以在第一时间获取到swiper对象  
//             autoplay:{  //可选项，自动滑动
//                 disableOnInteraction:false,//用户操作后是否禁止自动循环
//                 delay:3000       //自动循环时间
//             },
//             speed:2000,  //切换速度，即slider自动滑动开始到结束的时间
//             loop:true,  //循环切换
//             autoplayDisableOnInteraction:true, //和loop联合使用，形成无缝轮播
//             direction:'vertical', //切换方向    垂直  水平horizontal
//             // grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
//             // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
//             // autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
//             // scrollbar: '.swiper-scrollbar',
//             // mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
//             // observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper

//             pagination:{
//                 el:'.swiper-button-next',
//                 // type:'progressbar',//分页器形状  bullets圆点(默认)   fraction分式  progress进度条  custom自定义
//                 clickable:false, //点击分页器的指示点分页器会控制Swiper切换
//             },

//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//           },
//           computer:{
//             swiper(){
//                 return this.$refs.mySwiper.swiper
//             }
//           },
//           methods:{
//               stopPlay(){  //鼠标移上停止轮播
//                   this.mySwiper.stopAutoplay()
//               },
//               play(){  //鼠标移出继续轮播
//                   this.mySwiper.startAutoplay()
//               }
//           },
//       }
//   }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{
    height:0.83rem;
    overflow: hidden;
}
/* banner */
.e_banner{
    height:1.2rem;
    padding:0.15rem;
    box-sizing: border-box;
    border-bottom:1px solid #e5e5e5;
}
.e_banner img{
    width:100%;
    height:100%;
}
/* swiper */
.e_swiper{
    display:flex;
    height:0.83rem;
    padding:0.15rem;
    box-sizing: border-box;
    margin-bottom:0.09rem;
    /* border-bottom:1px solid #e5e5e5;  */
}
.e_swiperLeft{
    width:0.53rem;
    height:0.53rem;
}
.e_swiperLeft img{
    width:100%;
    height:100%;
}
.e_swiperRight{
    display:flex;
    margin-left:0.1rem;
}
.e_swiperWord{
    width:2.44rem;
}
.e_swiperWord p{
    line-height: 0.17rem;
    font-size:0.13rem;
    color:#1d1d1d;
}
.e_swiperWord span{
    margin-top:0.09rem;
    font-size:0.1rem;
    color:#9b9b9b;
}
.e_swiperNext{
    width:0.07rem;
    height:0.12rem;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
}
.e_swiperNext img{
    width:100%;
    height:100%;
}






</style>
