<template>
  <div>
    <div class="section_five">
      <a><p>电影周边</p><span>更多<img src="../../assets/image/daren_middle_more.png"></span></a>
      <div class="section_five_bot">
        <div class="section_five_bot_txt">
          <img src="../../assets/image/yu12.png">
          <h3>IMAX专用大境片</h3>
          <p>￥<span>19</span><i>99</i></p>
        </div>
        <div class="section_five_bot_txt">
          <img src="../../assets/image/yu13.png">
          <h3>从你的全世界路过</h3>
          <p>￥<span>19.9</span><i>19.9</i></p>
        </div>
        <div class="section_five_bot_txt">
          <img src="../../assets/image/yu14.png">
          <h3>X战警卡片盒收纳盒</h3>
          <p>￥<span>24.9</span><i>39</i></p>
        </div>
        <div class="section_five_bot_txt">
          <img src="../../assets/image/yu12.png">
          <h3>IMAX专用大境片</h3>
          <p>￥<span>19</span><i>99</i></p>
        </div>
        <div class="section_five_bot_txt">
          <img src="../../assets/image/yu13.png">
          <h3>从你的全世界路过</h3>
          <p>￥<span>19.9</span><i>19.9</i></p>
        </div>
        <div class="section_five_bot_txt">
          <img src="../../assets/image/yu14.png">
          <h3>X战警卡片盒收纳盒</h3>
          <p>￥<span>24.9</span><i>39</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "nuoMiC3SectionFive"
    }
</script>

<style scoped>
  .section_five{
    background: #fff;
    margin-top: 0.1rem;
  }
  .section_five a{
    line-height: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    padding: 0 0.12rem;
  }
  .section_five a p{
    font-size: 0.16rem;
    color: #0a0a0a;
  }
  .section_five a span{
    font-size: 0.12rem;
    color: #9b9b9b;
    display: flex;
    align-items: center;
  }
  .section_five a span img{
    width: 0.06rem;
    height: 0.12rem;
    margin-left: 0.03rem;
  }
  .section_five_bot{
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-top: 0.1rem;
  }
  .section_five_bot::-webkit-scrollbar{
    height: 0;
  }
  .section_five_bot_txt{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0.03rem;
  }
  .section_five_bot_txt:first-child{
    margin-left: 0.12rem;
  }
  .section_five_bot_txt:last-child{
    padding-right: 0.09rem;
  }
  .section_five_bot_txt img{
    width: 1.0rem;
    height: 0.86rem;
  }
  .section_five_bot_txt h3{
    width: 90%;
    font-size: 0.12rem;
    color: #020204;
    font-weight: 100;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .section_five_bot_txt p{
    font-size: 0.12rem;
    color: #bf984e;
    display: flex;
    align-items: center;
  }
  .section_five_bot_txt p span{
    display: block;
    font-size: 0.14rem;
    color: #ac7717;
  }
  .section_five_bot_txt p i{
    display: block;
    font-size: 0.12rem;
    color: #7d7d82;
    font-style: normal;
    text-decoration: line-through;
    margin-left: 0.05rem;
  }
</style>
