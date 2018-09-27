<template>
    <div>
      <div>
       <img id="toTop" src="../assets/images/new_scroll_top_btn.png"/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "movPublicTotop",
        mounted(){
           $(function(){
               $(window).scroll(function(){
                   if( $(window).scrollTop()>200){
               $("#toTop").fadeIn(500);
             }
                 else
                   {
               $("#toTop").fadeOut(500);
             }
                 });
               //当点击跳转链接后，回到页面顶部位置
               $("#toTop").click(function(){
                 $('body,html').animate({scrollTop:0},500);
                  return false;
           });
         })

       }
    }


</script>

<style scoped>
  .common_top{
    width: 0.39rem;
    height:0.84rem;
    position: fixed;
    right:0.12rem;
    bottom:1.18rem;
  }
  .common_top img{
    width: 0.39rem;
    height:0.42rem;
  }
  .common_top a{
    display: block;
    position: relative;
  }
  .common_top span{
    width: 0.15rem;
    height:0.15rem;
    color:#fcbecb;
    font-size: 0.03rem;
    background-color: #fe4070;
    border-radius: 50%;
    position: absolute;
    top:0;
    right:-0.04rem;
    line-height: 0.15rem;
    text-align: center;
  }
  #toTop{
    width:0.39rem;
    height:0.39rem;
    position: fixed;
    bottom: 0.7rem;
    right: 0.12rem;
    display: none;
  }


</style>
