<template>
    <div class="a-foot">
      <div>
        <router-link to="/nmIndexPages">
          <span></span>
          <p>首页</p>
        </router-link>
      </div>
      <div>
        <router-link to="/fujin">
          <span></span>
          <p>附近</p>
        </router-link>
      </div>
      <div>
        <router-link to="/shipin">
          <span></span>
          <p>视频</p>
        </router-link>
      </div>
      <div>
        <router-link to="/toutiao">
          <span></span>
          <p>头条</p>
        </router-link>
      </div>
      <div>
        <router-link to="/dmy">
          <span></span>
          <p>我的</p>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "nmIndexFoot"
    }
</script>

<style scoped>
  .a-foot div:nth-child(1) .router-link-active span{
    background: url("../../assets/image/a-foot01.png") no-repeat 0 0;
    background-size: 0.25rem 0.25rem;
  }
  .a-foot div:nth-child(2) .router-link-active span{
    background: url("../../assets/image/a-foot02.png") no-repeat 0 0;
    background-size: 0.25rem 0.25rem;
  }
  .a-foot div:nth-child(3) .router-link-active span{
    background: url("../../assets/image/a-foot03.png") no-repeat 0 0;
    background-size: 0.25rem 0.25rem;
  }
  .a-foot div:nth-child(4) .router-link-active span{
    background: url("../../assets/image/a-foot04.png") no-repeat 0 0;
    background-size: 0.25rem 0.25rem;
  }
  .a-foot div:nth-child(5) .router-link-active span{
    background: url("../../assets/image/a-foot05.png") no-repeat 0 0;
    background-size: 0.25rem 0.25rem;
  }
  .a-foot div .router-link-active p{
    color: #4a65e2;
  }
  .a-foot{
    width: 100%;
    height:0.5rem;
    display: flex;
    position: fixed;
    bottom:0;
    background-color: #f7f7f7;
    justify-content: space-around;
    z-index: 999;
  }
  .a-foot div{
    width: 20%;
  }
  .a-foot div span{
    width: 0.25rem;
    height:0.25rem;
    margin:0.05rem auto 0;
    display: block;
  }
  .a-foot div p{
    width: 100%;
    font-size: 0.1rem;
    color: #636466;
    margin-top:0.02rem;
    text-align: center;
  }
  .a-foot div:nth-child(1) span{
    background: url("../../assets/image/a-foot1.png") no-repeat 0 0;
    background-size: 0.25rem 0.25rem;
  }
  .a-foot div:nth-child(2) span{
    background: url("../../assets/image/a-foot2.png") no-repeat 0 0;
    background-size: 0.25rem 0.25rem;
  }
  .a-foot div:nth-child(3) span{
    background: url("../../assets/image/a-foot3.png") no-repeat 0 0;
    background-size: 0.25rem 0.25rem;
  }
  .a-foot div:nth-child(4) span{
    background: url("../../assets/image/a-foot4.png") no-repeat 0 0;
    background-size: 0.25rem 0.25rem;
  }
  .a-foot div:nth-child(5) span{
    background: url("../../assets/image/a-foot5.png") no-repeat 0 0;
    background-size: 0.25rem 0.25rem;
  }
</style>
