<template>
    <!--顶部-->
  <div>
    <div class="c2_header_h">
      <div class="c2_header_bg"></div>
      <div class="c2_header">
        <img @click="back" src="../../assets/image/wallet_juhe_back_normal.png">
        <span style="opacity:0;">{{date11.movieName}}</span>
        <img src="../../assets/image/icon_nav_sousuo_pressed.png">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "nuoMiC2HeaderTop",
      props:["date11"],
      created(){
        $(window).scroll(function(){
          if($(window).scrollTop()>10){
            $(".c2_header_bg").animate({
              "opacity":"1"
            },100);
            $(".c2_header").css("borderBottom","1px solid #f6f6f6");
            $(".c2_header span").css("opacity","1");
          }else{
            $(".c2_header_bg").animate({
              "opacity":"0"
            },0);
            $(".c2_header").css("borderBottom","1px solid transparent");
            $(".c2_header span").css("opacity","0");
          }
        })
      },
      methods:{
        back(){
          this.$router.go(-1);//返回上一层
        }
      }
    }

</script>

<style scoped>
  .c2_header_h{
    position: relative;
  }
  .c2_header_bg{
    width: 100%;
    height: 0.47rem;
    background: #fff;
    position: fixed;
    top: 0;
    opacity: 0;
    z-index: 999;
  }
  .c2_header{
    width: 92%;
    height: 0.47rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.15rem;
    background-size: cover;
    position: fixed;
    top: 0;
    z-index: 999;
    border-bottom: 1px solid transparent;
  }
  .c2_header img:first-child{
    width: 0.1rem;
    height: 0.17rem;
  }
  .c2_header img:last-child{
    width: 0.22rem;
    height: 0.2rem;
  }
</style>
