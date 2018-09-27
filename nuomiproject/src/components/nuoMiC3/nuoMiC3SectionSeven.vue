<template>
  <div>
    <div class="section_seven">
      <a><p>实时票房<span>（更新于11:30）</span></p><img src="../../assets/image/daren_middle_more.png"></a>
      <div class="section_seven_bot">
        <a><p>1</p><span>今日票房排行</span></a>
        <b></b>
        <a><p>1203<i>万</i></p><span>实时票房</span></a>
        <b></b>
        <a><p>8749<i>万</i></p><span>累计票房</span></a>
      </div>
    </div>

    <div class="section_eight1">
      <a><p>短评<span>（87）</span></p><span>发短评</span></a>
      <div class="section_eight1_con">
        <p><span>好评</span><span>中评</span><span>差评</span><span>已购票</span><span>最新</span></p>
        <div class="section_eight1_con_top">
          <div class="section_eight1_con_aa">
            <div class="section_eight1_con_t">
              <img src="../../assets/image/yu19.png">
              <a>
                <p>夏天一道彩虹<img src="../../assets/image/yu22.png"><span>购</span></p>
                <span><img src="../../assets/image/yu21.png">2天前</span>
              </a>
            </div>
            <img src="../../assets/image/yu24.png">
          </div>
          <div class="section_eight1_con_bb">
            <p>《反贪3》依旧没有让人失望，依旧精彩，除了对于 港片精彩的延续外，加入新鲜的元素，变成了不一样的《人民的名义》，让剧情变的更加扑朔迷离，紧张 刺激，绝对值得一看，张智霖太帅,祝票房大 卖!!!</p>
            <div class="section_eight1_con_c">
              <p>阅读4</p>
              <p><span><img src="../../assets/image/yu25.png" alt="">33</span><span><img src="../../assets/image/yu26.png" alt="">138</span></p>
            </div>
          </div>
        </div>
        <div class="section_eight1_con_top">
          <div class="section_eight1_con_aa">
            <div class="section_eight1_con_t">
              <img src="../../assets/image/yu20.png">
              <a>
                <p>wuji19881<img src="../../assets/image/yu22.png"></p>
                <span><img src="../../assets/image/yu21.png">2天前</span>
              </a>
            </div>
            <img src="../../assets/image/yu24.png">
          </div>
          <div class="section_eight1_con_bb">
            <p>《反贪3》依旧没有让人失望，依旧精彩，除了对于 港片精彩的延续外，加入新鲜的元素，变成了不一样的《人民的名义》，让剧情变的更加扑朔迷离，紧张 刺激，绝对值得一看，张智霖太帅,祝票房大 卖!!!</p>
            <div class="section_eight1_con_c">
              <p>阅读4</p>
              <p><span><img src="../../assets/image/yu25.png" alt="">33</span><span><img src="../../assets/image/yu26.png" alt="">138</span></p>
            </div>
          </div>
        </div>
        <p class="section_eight1_con_dd">查看全部评价<img src="../../assets/image/social_find_friend_contacts_banner_with_permission_button_icon.png"></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "nuoMiC3SectionSeven"
    }
</script>

<style scoped>
  .section_seven{
    background: #fff;
    margin-top: 0.1rem;
  }
  .section_seven a{
    line-height: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    padding: 0 0.12rem;
  }
  .section_seven a p{
    font-size: 0.16rem;
    color: #0a0a0a;
  }
  .section_seven a p span{
    font-size: 0.14rem;
    color: #8c8c8c;
  }
  .section_seven a img{
    width: 0.06rem;
    height: 0.12rem;
  }
  .section_seven_bot{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
  .section_seven_bot a{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    border-bottom: 0;
    line-height: 0.12rem;
  }
  .section_seven_bot b{
    width: 1px;
    height: 0.55rem;
    border-left: 1px solid #f6f6f6;
  }
  .section_seven_bot a p{
    font-size: 0.18rem;
    color: #ab7615;
    line-height: 0.4rem;
  }
  .section_seven_bot a p i{
    font-size: 0.13rem;
    color: #cdae74;
    font-style: normal;
    margin-left: 0.06rem;
  }
  .section_seven_bot a span{
    font-size: 0.12rem;
    color: #b0b0b0;
    display: block;
  }

  .section_eight1{
    background: #fff;
    margin-top: 0.1rem;
  }
  .section_eight1 a{
    padding: 0 0.12rem;
    border-bottom: 1px solid #f6f6f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0.4rem;
  }
  .section_eight1 a p{
    display: flex;
    align-items: center;
    font-size: 0.16rem;
  }
  .section_eight1 a p span{
    font-size: 0.13rem;
    color: #898989;
    border: none;
    display: block;
    width: 0.2rem;
  }
  .section_eight1 a span{
    display: block;
    width: 0.63rem;
    height: 0.2rem;
    font-size: 0.12rem;
    color: #9a6b17;
    border: 1px solid #b8975c;
    border-radius: 0.04rem;
    text-align: center;
    line-height: 0.2rem;
  }
  .section_eight1_con p{
    display: flex;
    margin: 0.12rem 0.03rem 0.05rem;
  }
  .section_eight1_con p span{
    font-size: 0.12rem;
    display: block;
    border: 1px solid #ffae5f;
    color: #ff7f02;
    padding: 0.03rem 0.05rem;
    border-radius: 0.04rem;
    margin: 0 0.02rem;
  }
  .section_eight1_con p span:nth-child(3){
    color: #636363;
    border-color: #dfdfdf;
  }
  .section_eight1_con_aa{
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    align-items: flex-end;
  }
  .section_eight1_con_aa img{
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
  }
  .section_eight1_con_t{
    display: flex;
    align-items: center;
  }
  .section_eight1_con_t img{
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
  }
  .section_eight1_con_t a{
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0.21rem;
    border: none;
  }
  .section_eight1_con_t a p{
    font-size: 0.12rem;
    color: #3e3e48;
    display: flex;
    align-items: center;
  }
  .section_eight1_con_t a p img{
    width: 0.16rem;
    height: 0.12rem;
    margin-left: 0.05rem;
  }
  .section_eight1_con_t a p span{
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 0.02rem;
    border: 1px solid #ff4890;
    text-align: center;
    line-height: 0.1rem;
    font-size: 0.12rem;
    color: #ff5395;
    margin-left: 0.05rem;
  }
  .section_eight1_con_t a span{
    font-size: 0.12rem;
    color: #9c9c9f;
    display: flex;
    align-items: center;
    border: none;
    width: 100%;
  }
  .section_eight1_con_t a span img{
    width: 0.64rem;
    height: 0.1rem;
    margin-right: 0.05rem;
  }
  .section_eight1_con_bb{
    margin-left: 0.59rem;
    padding-right: 0.11rem;
    letter-spacing: 1px;
    border-bottom: 1px solid #f6f6f6;
    padding-bottom: 0.05rem;
  }
  .section_eight1_con_bb p{
    font-size: 0.12rem;
    color: #2d2d2d;
    line-height: 0.17rem;
  }
  .section_eight1_con_c{
    display: flex;
    justify-content: space-between;
  }
  .section_eight1_con_c p{
    display: flex;
    color: #6d6d6d;
    line-height: 0.25rem;
    margin: 0 -0.05rem 0 0;
  }
  .section_eight1_con_c p span{
    border: none;
    color: #5e5e5e;
    font-size: 0.12rem;
    display: flex;
    align-items: center;
  }
  .section_eight1_con_c p span img{
    width: 0.15rem;
    height: 0.14rem;
    margin-right: 0.04rem;
    letter-spacing: 0px;
  }
  .section_eight1_con p.section_eight1_con_dd{
    font-size: 0.12rem;
    color: #565656;
    display: flex;
    align-items: center;
    margin: 0 38%;
    line-height: 0.4rem;
    letter-spacing: 1px;
  }
  .section_eight1_con_dd img{
    width: 0.05rem;
    height: 0.1rem;
    margin-left: 0.05rem;
  }
</style>
