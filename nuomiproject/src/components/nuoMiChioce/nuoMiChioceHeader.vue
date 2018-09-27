<template>
   <div>
     <div class="nuoMiChioce">
        <img @click="back" class="nuoMiChioceImg" src="../../assets/image/sapi_sdk_bottom_back.png" alt="">
        <div class="nuoMiMoveName">
            {{ date1.movieName}}
        </div>
     </div>
     <div class="nuoMIinfor">
        <div class="b_nuoMiFileInfor">
           <p class="b_nuoMiFileInfor1">{{ date1.movieTheaterNamesd}}</p>
           <p class="b_nuoMiFileInfor2"><span class="b-tesqu"></span><span>( {{date1.movieLanguage}})</span></p>
        </div>
        <div class="b_nuoMichange">
           换一换
        </div>
     </div>

   </div>
</template>

<script>
    export default {
        name: "nuoMiChioceHeader",
        props:["date1"],
        methods: {
          back() {
            this.$router.go(-1);
          }
        }
    }
    function getDate() {
      var today = new Date();
      var date =twoDigits(today.getMonth() + 1) + "月" + twoDigits(today.getDate()) + "日 ";
      var week = "(周" + "日一二三四五六 ".charAt(today.getDay())+")";
      var time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes()) + ":" + twoDigits(today.getSeconds());
      $(".b-tesqu").html(date + week +time );
    }
    function twoDigits(val) {
      if (val < 10) return "0" + val; return val;
    }
    $(function () {
      setInterval(getDate, 1000);
    });

</script>

<style scoped>



  .nuoMiChioce{
    position: relative;
    width: 100%;
    background: #ffffff;
    height: 0.43rem;
    border-bottom: 1px solid #dddddd;
  }
  .nuoMiChioceImg{
    position: absolute;
    top:0.14rem;
    left:0.15rem;
    width: 0.09rem;
    height: 0.11rem;
  }
  .nuoMiMoveName{
    position: absolute;
    left:40%;
    top:24%;
    text-align: center;
    font-size:0.17rem;
    color:#00000b ;
  }
  .nuoMIinfor{
    background: #fff;
    height: 0.67rem;
    padding: 0 0.15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .b_nuoMichange{
    font-size: 0.13rem;
    color: #707070;
  }
  .b_nuoMiFileInfor1{
    margin-top: 0.07rem;
    line-height:0.28rem ;
    font-size:0.16rem;
    color:#434343 ;
  }
  .b_nuoMiFileInfor2{
    letter-spacing: 1px;
    margin-bottom: 0.11rem;
    line-height:0.21rem ;
    font-size:0.13rem;
    color:#c5a15d;
  }
</style>
