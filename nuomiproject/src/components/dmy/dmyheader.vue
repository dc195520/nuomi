<template>
  <div>
    <header>
      <div class="d3_headertop">
        <img src="../../assets/images/d32.gif" alt="">
        <p class="d3_headertop1">晴天娃娃</p>
        <img src="../../assets/images/d31.gif" alt="">
      </div>
    </header>
  </div>

</template>

<script>
    export default {
        name: "dmyheader",
      mounted(){
        $(window).scroll(function(){
          // let temp =document.documentElement.scrollTop || document.body.scrollTop;
          if( $(window).scrollTop()>0){
            $(".d3_headertop").css({
              "position":"fixed",
              "top":"0",
              "z-index":"999",
              "background":"#f0f0f0",
              "borderBottom":"1px solid #dddddd",
              "left":"0",
              "width":"100%",
            });
            $(".d3_headertop1").css({
              "opacity":"1",
            })
          } else{
            $(".d3_headertop").css({
              "position":"absolute",
              "top":"0",
              "background":"transparent",
              "width":"100%",
              "borderBottom":"1px solid transparent",
            });
            $(".d3_headertop1").css({
              "opacity":"0"
            })
          }
        })
      }
    }

</script>

<style scoped>
  .d3_headertop{
    display: flex;
    justify-content: space-between;
    height: 0.4rem;
    padding: 0 0.14rem;
    align-items: center;
    box-sizing: border-box;
  }
  .d3_headertop img{
    width: 0.21rem;
    height: 0.22rem;
  }
  .d3_headertop p{
    font-size: 0.18rem;
    color: #404040;
    font-weight: 900;
    opacity: 0;
  }
</style>
