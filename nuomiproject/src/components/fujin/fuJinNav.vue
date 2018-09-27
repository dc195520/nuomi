<template>
    <div class="e_box">
      <div class="container" id="container">

      </div>

      <!--热销-->
        <div class="circle">
            <div class="c_top">
                <h3>附近热销</h3>
            </div>
            <div class="c_img">
                <img src="../../assets/images/f_1.png" alt="">
                <img src="../../assets/images/f_2.png" alt="">
                <img src="../../assets/images/f_3.png" alt="">
            </div>
        </div>
        <!--nav-->
        <nav class="navs">
          <div class="n_top">
            <a :class="{'class-a':activ==1}" @click="show(1)" href="javascript:;">美食</a>
            <a :class="{'class-a':activ==2}" @click="show(2)" href="javascript:;">休闲娱乐</a>
            <a :class="{'class-a':activ==3}" @click="show(3)" href="javascript:;">生活服务</a>
            <a :class="{'class-a':activ==4}" @click="show(4)" href="javascript:;">酒店</a>
            <a :class="{'class-a':activ==5}" @click="show(5)" href="javascript:;">全部</a>
          </div>
          <div class="n_bot">
            <div class="n_list">
              <a href="#">全部</a>
              <a href="#">KTV</a>
              <a href="#">丽人</a>
              <a href="#">足疗按摩</a>
              <a href="#">运动健身</a>
              <a href="#">美食</a>
              <a href="#">休闲娱乐</a>
              <a href="#">生活服务</a>
              <a href="#">酒店</a>
              <a href="#">全部</a>
            </div>
          </div>
        </nav>
        <mei-shi v-if="flag==1"
            :list="list1"  class="aas" id="ssa">
        </mei-shi>
        <mei-shi v-if="flag==1" :list="list1">
        </mei-shi>
        <xiu-xian-yue-le v-if="flag==2"></xiu-xian-yue-le>
        <sheng-huo-fu-wu v-if="flag==3"></sheng-huo-fu-wu>
        <quan-bu v-if="flag==4"></quan-bu>
    </div>
</template>

<script>
import meiShi from "./section/meiShi"
import xiuXianYueLe from "./section/xiuXianYueLe"
import shengHuoFuWu from "./section/shengHuoFuWu"
import quanBu from "./section/quanBu"

export default {
  name: 'fuJinNav',
  components:{meiShi,xiuXianYueLe,shengHuoFuWu,quanBu},

  props:["list1"],

  data(){
    return {
      flag:1,
      activ:1,
    };
  },
  methods:{
    show(f){
      this.flag=f;
      this.activ=f;
    }
  },
  mounted() {
    $(window).scroll(function(){
      // let temp =document.documentElement.scrollTop || document.body.scrollTop;
      if( $(window).scrollTop()>434){
        $(".navs").addClass("navss");
        $(".aas").addClass("aass")

      } else{
        $(".navs").removeClass("navss");
         $(".aas").removeClass("aass")
      }
    });
    //地图
    var map = new BMap.Map("container");
    var point = new BMap.Point(116.404,39.915);
    //定位

    map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus()==BMAP_STATUS_SUCCESS){
        point = new BMap.Point(r.point.lng , r.point.lat)
      }
      map.centerAndZoom(point,15) //初始化地图，设置中心点坐标
    },{enableHighAccuracy:true})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.n_top .class-a{
    color:#000;
    font-weight: 700;
    border-bottom:1px solid #000;
}
.container{
  height:2rem;
  background:pink;
}
.circle{
    width: 100%;
    height: 2.17rem;
    padding-left:0.15rem;
    box-sizing: border-box;
    margin-bottom:0.08rem;
    background:#fff;
}
#ssa{
  margin-bottom: 0;

}

.aass{
 margin-top: 1.1rem;
}
.c_top{
    width:100%;
    height:0.5rem;
    text-align: center;
}
.c_top h3{
    width:1.3rem;
    margin:0 auto;
    line-height: 0.5rem;
    color:#000;
    text-align: center;
}
.c_img{
    width:100%;
    height:1.51rem;
}
.c_img img{
    width:1.1rem;
    height:1.51rem;
}
.c_img img:nth-child(2){
    margin:0 0.05rem;
}
/*nav*/
nav{
    width:100%;
    height:0.95rem;
    background:#fff;
}
.navss{
  position:fixed;
  top:0;
  z-index:999;
  background:#fff;
  border-bottom:1px solid #dddddd;
  left:0;
  width:100%;

}
.n_top{
    display:flex;
    justify-content: space-between;
    width:100%;
    height:0.45rem;
    padding:0 0.25rem;
    box-sizing: border-box;
    border-bottom: 1px solid #d4d4d4;
}
.n_top a{
    font-size: 0.15rem;
    color:#6f6f6f;
    line-height:0.45rem;
    border-bottom:1px solid transparent;
}
/* .n_top a:hover{
    color:#000;
    font-weight: 700;
    border-bottom:1px solid #000;
} */
.n_bot{
    width:100%;
    overflow-x: scroll;
    padding:0.13rem 0 ;
    box-sizing: border-box;
    border-bottom: 1px solid #d4d4d4;
}
.n_bot::-webkit-scrollbar{
  height:0;
}
.n_list{
    width:190%;
    overflow: hidden;
}
.n_list a{
    display:inline-block;
    min-width: 0.55rem;
    height:0.26rem;
    background:#f4f4f4;
    text-align: center;
    line-height: 0.26rem;
    color:#8b8b8b;
    margin-left:0.11rem;
}
.n_list a:hover{
    color:#000;
}

</style>
