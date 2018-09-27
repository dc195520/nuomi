<template>
  <div>
    <div class="section_one">
      <div class="section_one_top" v-bind:style="{backgroundImage:'url(' + da11.movieBgImg + ')', backgroundSize:'cover'}">
        <div class="section_one_top_t">
          <div class="section_one_left_le">
            <video :poster="da11.movieImg" controls>
              <source :src="da11.movieVideo" type="video/mp4"/>
            </video>
            <!--<span>-->
              <!--<img src="../../assets/image/icon_play@2x.png" alt="">-->
              <!--&lt;!&ndash;<img src="../../assets/image/icon_pause@2x.png" alt="">&ndash;&gt;-->
            <!--</span>-->
          </div>
          <div class="section_one_left_mid">
            <h2>{{da11.movieName}}</h2>
            <a><img :src="da11.movieScoreImg"><span>{{da11.movieScore}}</span></a>
            <p>{{da11.movieTitle}}</p>
            <p>{{da11.movieClassify}}</p>
            <p>参考片长：{{da11.movieSumTime}}</p>
            <p>上映：{{da11.movieShowTime}}</p>
          </div>
        </div>
        <div class="section_one_top_c">
          <a><img src="../../assets/image/yc21.png">想看</a>
          <a><img src="../../assets/image/yc23.png">评分</a>
          <a><img src="../../assets/image/yc22.png">饭圈</a>
        </div>
      </div>
      <div class="section_one_bot">
        <p>{{da11.movieIntro}}</p>
        <span class="readMoreImg"></span>
      </div>
    </div>

    <div class="section_two1">
      <a>
        <h3>糯米电影卡</h3>
        <p>一卡多用，赠送好友</p>
      </a>
      <span>购卡</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "nuoMiC3SectionOne",
      props:["da11"],
      created(){
        $(function(){
          $(".readMoreImg").click(function(){
            $(".section_one_bot p").css("display","block");
            // $(".section_one_bot .readMoreImg").css("background-image","url('../../assets/image/wallet_scancode_uparrow.png') no-repeat 7px 10px");
          })
        });
      }

    }
</script>

<style scoped>
  .section_one_top{
    background: url("../../assets/image/d833c895d143ad4b3e4883fb8f025aafa40f06a3.jpg") 0 0;
    background-size: cover;
    width: 94.7%;
    padding: 0 0.1rem 0.15rem;
    margin-top: 0.45rem;
  }
  .section_one_top_t{
    padding-top: 0.15rem;
    display: flex;
  }
  .section_one_left_le{
    width: 0.9rem;
    height: 1.26rem;
    position: relative;
  }
  .section_one_left_le video{
    width: 100%;
    height: 100%;
  }
  .section_one_left_le span{
    width: 0.2rem;
    height: 0.2rem;
    display: block;
    border-radius: 50%;
    background: rgba(0,0,0,0.6);
    position: absolute;
    bottom: 0.1rem;
    right: 0.1rem;
    border: 1px solid #fff;
  }
  .section_one_left_le span img{
    width: 0.38rem;
    height: 0.25rem;
    margin-top: -0.02rem;
    margin-left: -0.08rem;
  }
  .section_one_left_mid{
    letter-spacing: 1px;
    margin-left: 0.12rem;
  }
  .section_one_left_mid h2{
    font-size: 0.14rem;
    color: #fff;
    font-weight: 100;
    line-height: 0.28rem;
  }
  .section_one_left_mid a{
    margin: 0 0 0.08rem;
    display: flex;
    align-items: center;
  }
  .section_one_left_mid img{
    width: 0.72rem;
    height: 0.14rem;
  }
  .section_one_left_mid a span{
    font-size: 0.12rem;
    margin-left: 0.05rem;
    color: #ff7f00;
   }
  .section_one_left_mid p{
    font-size: 0.12rem;
    line-height: 0.18rem;
    color: #f2f3f3;
    letter-spacing: 1px;
  }
  .section_one_top_c{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0.1rem;
  }
  .section_one_top_c a{
    width: 1.14rem;
    height: 0.3rem;
    border: 1px solid #a9aab2;
    background: rgba(0,0,0,0.4);
    border-radius: 0.05rem;
    display: flex;
    align-items: center;
    font-size: 0.13rem;
    color: #f8f9f9;
  }
  .section_one_top_c a img{
    width: 0.19rem;
    height: 0.19rem;
    margin-left: 0.3rem;
    margin-right: 0.05rem;
  }
  .section_one_bot{
    margin-top: 0.1rem;
    padding: 0 0.12rem;
    background: #fff;
  }
  .section_one_bot p{
    font-size: 0.12rem;
    color: #000;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:5;
    -webkit-box-orient: vertical;
    line-height: 0.22rem;
  }
  .section_one_bot span{
    display: block;
    width: 100%;
    height: 0.2rem;
    background: url("../../assets/image/city_select_arrow_down.png") no-repeat 49% 10px;
    background-size: 0.1rem 0.1rem;
    padding-bottom: 0.1rem;
  }


  .section_two1{
    margin-top: 0.1rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.12rem;
    letter-spacing: 1px;
  }
  .section_two1 a h3{
    font-size: 0.16rem;
    color: #1a1a1a;
    font-weight: 100;
    line-height: 0.27rem;
    margin-top: 0.08rem;
  }
  .section_two1 a p{
    font-size: 0.12rem;
    color: #8c8c8c;
    line-height: 0.2rem;
    margin-bottom: 0.1rem;
  }
  .section_two1 span{
    color: #bd9348;
    text-align: center;
    line-height: 0.28rem;
    font-size: 0.12rem;
    display: block;
    width: 0.78rem;
    height: 0.28rem;
    border: 1px solid #dac297;
    border-radius: 0.15rem;
  }
</style>
