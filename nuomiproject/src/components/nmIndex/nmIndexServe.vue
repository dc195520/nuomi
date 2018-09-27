<template>
    <div class="a-serve">
      <h2>便民服务</h2>
      <div class="a-serveBottom">
        <div>
          <img src="../../assets/image/a-serve1.png"/>
          <p>票务出行</p>
        </div>
        <div>
          <img src="../../assets/image/a-serve2.png"/>
          <p>丽人</p>
        </div>
        <div>
        <img src="../../assets/image/a-serve3.png"/>
        <p>家政保洁</p>
      </div>
        <div>
          <img src="../../assets/image/a-serve4.png"/>
          <p>维修</p>
        </div>
        <div>
          <img src="../../assets/image/a-serve5.png"/>
          <p>免流特权</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "nmIndexServe"
    }
</script>

<style scoped>
  .a-serve{
    width: 100%;
    height:1.2rem;
    background-color:#ffffff;
  }
  .a-serve h2{
    font-size: 0.15rem;
    line-height: 0.51rem;
    text-indent:0.15rem ;
    color: #4b4b4b;
  }
  .a-serveBottom{
    width: 100%;
    display: flex;
    justify-content: space-around;
    height:0.6rem;
  }
  .a-serveBottom div{
    margin-top: 0.1rem;
    width: 0.5rem;
    text-align: center;
  }
  .a-serveBottom div img{
    width: 0.28rem;
    height:0.25rem;
  }
  .a-serveBottom div p{
    width: 100%;
    font-size:0.12rem ;
    color:#565656 ;
    line-height: 0.14rem;
  }
</style>
