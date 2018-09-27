<template>
    <div>
      <header>
        <div class="e_top">
          <div class="e_goBack" @click="back()">
            <img src="../../assets/images/back_btn_normal.png" alt="">
          </div>
          <span>美食</span>
          <div class="e_goBack1">
            <img src="../../assets/images/a-search02.png" alt="">
          </div>
        </div>
        <div class="e_search">
          <i class="iconfont  icon-fangdajing"></i>
          <input type="text" placeholder="韩国料理">
        </div>
      </header>
        <nav>
            <a class="list" href="#">
                <img src="../../assets/images/ms-nav1.jpg" alt="">
                <span>自助餐</span>
            </a>
            <a class="list" href="#">
                <img src="../../assets/images/ms-nav2.jpg" alt="">
                <span>烧烤</span>
            </a>
            <a class="list" href="#">
                <img src="../../assets/images/ms-nav3.jpg" alt="">
                <span>小吃快餐</span>
            </a>
            <a class="list" href="#">
                <img src="../../assets/images/ms-nav4.jpg" alt="">
                <span>西餐</span>
            </a>
            <a class="list" href="#">
                <img src="../../assets/images/ms-nav5.jpg" alt="">
                <span>外卖</span>
            </a>
            <a class="list" href="#">
                <img src="../../assets/images/ms-nav6.jpg" alt="">
                <span>火锅</span>
            </a>
            <a class="list" href="#">
                <img src="../../assets/images/ms-nav7.jpg" alt="">
                <span>川湘菜</span>
            </a>
            <a class="list" href="#">
                <img src="../../assets/images/ms-nav8.jpg" alt="">
                <span>海鲜</span>
            </a>
        </nav>

    </div>

</template>

<script>

export default {
    name: 'meiShiNav',
    methods:{
        back(){
            this.$router.go(-1);
        }
    },
    mounted(){
      $(window).scroll(function(){
        // let temp =document.documentElement.scrollTop || document.body.scrollTop;
        if( $(window).scrollTop()>0){
          $(".e_top").addClass("e_tops")
          $(".e_goBack1").css("opacity","1")

        } else{
          $(".e_top").removeClass("e_tops")
          $(".e_goBack1").css("opacity","0")
        }
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* header */
/* 美食 */
.e_top{
  justify-content: space-between;
  align-items: center;
  display: flex;
  height:0.6rem;
  background-image: url(../../assets/images/bg_header.png);
  padding-top: 0.15rem;
  box-sizing: border-box;
  width: 100%;
}
.e_tops{
  position:fixed;
  top:0;
  z-index:999;
  background:#fff;
  border-bottom:1px solid #dddddd;
  left:0;
  width:100%;
  padding-top:0;
}
.e_goBack{
  display: inline-block;
  width: 0.24rem;
  height: 0.30rem;
  margin-left: 0.14rem;
}
.e_goBack1{
  width: 0.22rem;
  height: 0.26rem;
  margin-right: 0.14rem;

  opacity:0;
}
.e_goBack img{
  height:100%;
  width:100%;
}
.e_goBack1 img{
  height:100%;
  width:100%;
}
.e_top span{
  font-size:0.25rem;
  color:#010002;
  display: block;
}
/* 搜索 */
.e_search{
  position: relative;
  height:0.5rem;
  padding:0.1rem 0.22rem;
  box-sizing: border-box;
}
.e_search i{
  position: absolute;
  top: 0.2rem;
  left: 0.37rem;
  font-size: 0.16rem;
  color: #aeaeae;
}
.e_search input {
  width:3.3rem;
  height:0.3rem;
  border-radius: 0.15rem;
  text-indent: 0.37rem;
  color:#aeaeae;
  font-size:0.14rem;
  outline: none;
  border:1px solid #989898;
}
/* nav */
nav{
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height:1.97rem;
  padding-bottom: 0.07rem;
  border-bottom:1px solid #e5e5e5;
}
nav .list{
  display: block;
  height: 0.9rem;
  padding: 0.15rem 0.15rem 0 0.15rem;
  box-sizing: border-box;
}
.list img{
  display:block;
  height: 0.52rem;
  width:0.52rem;
}
.list span{
  display:block;
  text-align: center;
  margin-top:0.08rem;
  color:#383838;
  font-size:0.12rem;
}

</style>
