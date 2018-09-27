<template>
  <div>
    <div class="a-section">
      <div class="a-firstBanner">
        <h1>精选排行</h1>
        <p>最好的都在这里</p>
        <img src="../../assets/image/a-banner1.jpg"/>
      </div>
      <div class="a-secondBanner">
        <div>
          <h1>0元包邮</h1>
          <p>豪礼免费送</p>
        </div>
        <img src="../../assets/image/a-banner2.jpg" />
      </div>
      <div class="a-secondBanner">
        <div>
          <h1>发现好货</h1>
          <p>福利集散地</p>
        </div>
        <img src="../../assets/image/a-banner3.png" />
      </div>
      <div class="a-section2">
        <div class="a-secondBanner">
          <div>
            <h1>大脑西游</h1>
            <p>影票免费拿</p>
          </div>
          <img src="../../assets/image/a-banner4.jpg" />
        </div>
        <div class="a-secondBanner">
        <div>
          <h1>每日福利</h1>
          <p>9积分任性兑</p>
        </div>
        <img src="../../assets/image/a-banner5.png" />
      </div>
      </div>
    </div>
    <div class="a-find">
      <a href="#">
        <h1>发现好友</h1>
        <div class="a-findFriend">
          <img src="../../assets/image/a-find1.png"/>
          <div>
            <p>开启社交功能</p>
            <p>与好友探索精彩生活</p>
          </div>
          <span>开启</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "nmIndexSection"
    }
</script>

<style scoped>
  .a-section{
    width: 100%;
    height: 2.33rem;
    font-size: 0.1rem;
    color: #4e4e4e;
    margin-top: 0.08rem;
  }
  .a-section h1{
    font-size: 0.17rem;
    color: #323232;
  }
  .a-section p{
    line-height: 0.16rem;
  }
 .a-firstBanner{
   width: 1.7rem;
   height:1.35rem;
   margin:0 0.03rem 0.02rem 0;
   padding:0.23rem 0 0 0.15rem;
   float: left;
   background: #fff;
 }
  .a-firstBanner h1{
    letter-spacing: 0.17rem;
  }

  .a-firstBanner img{
    width: 0.9rem;
    height:0.9rem;
    margin:0 auto;
    display: block;
  }
.a-secondBanner{
  width: 1.86rem;
  height:0.78rem;
  margin-bottom: 0.02rem;
  float: left;
  display: flex;
  background: #fff;
  }
.a-secondBanner div{
  margin:0.22rem 0.23rem 0 0.2rem;
}
.a-secondBanner img{
  width:0.73rem;
  height:0.73rem;
}
.a-section2{
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.a-find{
  width: 100%;
  height:1.42rem;
  box-sizing: border-box;
  padding:0 0.15rem;
  background-color: #fff;
  margin:0.08rem 0;
}
.a-find h1{
  color: #303030;
  font-size: 0.15rem;
  line-height:0.47rem ;
}
  .a-findFriend{
    width: 100%;
    height:0.8rem;
    box-sizing: border-box;
    padding:0 0.17rem;
    display: flex;
    align-items: center;
    background-color: #f8f6f1;
  }
  .a-findFriend img{
    width: 0.42rem;
    height:0.42rem;
    margin-right:0.1rem;
  }
  .a-findFriend p{
    font-size: 0.13rem;
    color:#170707 ;
    line-height: 0.2rem;
  }
  .a-findFriend span{
    display: block;
    width: 0.62rem;
    height:0.3rem;
    background-color:#bf974d ;
    color: #fff;
    font-size: 0.13rem;
    border-radius: 0.15rem;
    line-height:0.3rem;
    text-align: center;
    margin-left:0.67rem;
  }

</style>
