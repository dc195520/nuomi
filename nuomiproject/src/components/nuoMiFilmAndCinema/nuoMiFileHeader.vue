<template>
    <div >
       <div class="mb_header">
          <img @click="back" class="b-tback" src="../../assets/image/wallet_juhe_back_normal.png" alt="">
          <div class="mb_header_c" >
            <span  @click="show(1)" :class="{change: active==1 }">影片</span>
            <span  @click="show(2)"  :class="{change: active==2 }">影院</span>
          </div>
          <img class="b-search" src="../../assets/image/icon_nav_sousuo_normal.png" alt="">
        </div>
       <div v-show="flag ==1">
         <div class="b_file" >
             <span @click="show1(4)" :class="{change1: active1==4 }">热映中</span>
             <span @click="show1(5)" :class="{change1: active1==5 }">待上映</span>
             <span @click="show1(6)" :class="{change1: active1==6 }">已下线</span>
         </div>
         <div class="b_section">
             <nuo-mi-re-ying :quest="test" v-show="flag1 ==4"></nuo-mi-re-ying>
             <nuo-mi-daishangying :quest="test"   v-show="flag1 ==5"></nuo-mi-daishangying>
             <nuo-miyi-xia-xian :qty="test" v-show="flag1 ==6"></nuo-miyi-xia-xian>
         </div>
       </div>
       <div v-show="flag ==2">
         <div class="b_cinema" >
           <span @click="show2(1)" :class="{change2: active2==1 }">全城<a></a></span>
           <span @click="show2(2)" :class="{change2: active2==2 }">品牌<a></a></span>
           <span @click="show2(3)" :class="{change2: active2==3 }">筛选<a></a> </span>
         </div>
         <div class="b_sectioncinema">
              <nuomiallcity :cter="crm"  v-show="flag2 ==1"></nuomiallcity>
              <nuo-mi-pin-pai :cter="crm" v-show="flag2 ==2"></nuo-mi-pin-pai>
              <nuomicinemachioce :cter="crm"  v-show="flag2 ==3"></nuomicinemachioce>
         </div>
       </div>

    </div>
</template>

<script>
    import NuoMiReYing from "./nuoMiReYing";
    import NuoMiDaishangying from "./nuoMiDaishangying";
    import NuoMiyiXiaXian from "./nuoMiyiXiaXian";
    import NuoMiFile from "./nuoMiFile";
    import Nuomiallcity from "./nuomiallcity";
    import NuoMiPinPai from "./nuoMiPinPai";
    import Nuomicinemachioce from "./nuomicinemachioce";
    export default {
        name: "nuoMiFileHeader",
        components: {
          Nuomicinemachioce,
          NuoMiPinPai, Nuomiallcity, NuoMiFile,NuoMiyiXiaXian, NuoMiDaishangying, NuoMiReYing},
        data(){
          return{
            flag:1,
            active:1,
            flag1:4,
            active1:4,
            flag2:1,
            active2:1,

          }
        },
         props:["test","crm"],
        methods:{
          show(f){
            this.flag = f,
            this.active=f
          },
          show1(f){
              this.flag1 = f,
              this.active1=f
          },
          show2(f){
              this.flag2 = f,
              this.active2=f
          },
            back(){
              this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
  .mb_header{
    background: #fdfdfd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.15rem;
    height: 0.44rem;
    border-bottom: 1px solid #dcdcdc;
    letter-spacing: 1px ;
    width: 92%;
    position: fixed;
    top: 0;
    z-index: 9999;
  }
  .b_file{
    position: fixed;
    top:0.45rem;
    z-index: 9999;
  }
  .b_section{
     margin-top: 0.83rem;
     height: 80%;
     overflow-y: scroll;
     margin-bottom: 0.53rem;
  }
  .b-tback{
    width:0.09rem ;
    height:0.16rem ;
  }
  .b-search{
    width:0.16rem ;
    height:0.16rem ;
  }
  .mb_header_c{
    display: flex;
    width: 2.57rem;
    height: 0.32rem;
    box-sizing: border-box;
    border: 1px solid #f03967;
    border-radius: 3px;
  }
  .mb_header_c span{
      display:block;
      width:1.28rem ;
      height: 0.3rem;
      line-height:0.3rem ;
      text-align: center;
      font-size:0.12rem ;
      background:#ffffff;
      color: #f03967;
  }
  .mb_header_c  .change{
     background:#ff2245 ;
     color:#ffffff;
  }
  .b_file{
    width: 100%;
    background: #ffffff;
    height: 0.38rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #dcdcdc;
  }

  .b_file span{
    line-height: 0.38rem;
    color: #b6b6b6;
    font-size:0.14rem;
  }
  .b_file .change1{
    color:#7d7d7d;
    border-bottom: 1px solid #2b2b2b;
    box-sizing: border-box;
  }
  .b_cinema .change2{
    color:#7d7d7d;
  }
  .b_cinema{
    position: fixed;
    top:0.45rem;
    z-index: 9999;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    border-bottom: 1px solid #f4f4f4;
  }
  .b_cinema span{
     line-height: 0.39rem;
     font-size: 0.13rem;
     color: #b6b6b6;
     display: flex;
     justify-content: center;
    align-items: center;
  }
  .b_cinema span a{
    display: block;
    width: 0.24rem;
    height: 0.24rem;
    background: url("../../assets/image/wallet_personal_trans_refund_down_arrow.png") no-repeat 0 1px;
    background-size: cover;
  }
  .b_cinema .change2 a{
    display: block;
    width: 0.24rem;
    height: 0.24rem;
    background: url("../../assets/image/wallet_scancode_uparrow.png") no-repeat 7px 10px;
    background-size: 0.1rem 0.05rem;
  }
  .b_sectioncinema{
    margin-top: 0.83rem;
    height: 80%;
    overflow-y: scroll;
    margin-bottom: 0.53rem;
  }
</style>
