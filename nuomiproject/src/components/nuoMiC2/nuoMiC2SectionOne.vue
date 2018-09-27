<template>
  <div>
    <div class="section_one">
      <div class="section_one_top">
        <div class="section_one_left">
          <div class="section_one_left_le">
            <video :poster="date12.movieImg" controls>
              <source :src=date12.movieVideo type="video/mp4"/>
            </video>
            <!--<span>-->
              <!--<img src="../../assets/image/icon_play@2x.png" alt="">-->
              <!--&lt;!&ndash;<img src="../../assets/image/icon_pause@2x.png" alt="">&ndash;&gt;-->
            <!--</span>-->
          </div>
          <div class="section_one_left_mid" @click="getMovie(date12.movieId)">
            <h2>{{date12.movieName}}</h2>
            <span>{{date12.movieScore1}}</span>
            <p>{{date12.movieClassify}}</p>
            <i>{{date12.movieShowTime}}上映/{{date12.movieSumTime}}</i>
          </div>
        </div>
        <div class="section_one_right" @click="getMovie(date12.movieId)">
          <img src="../../assets/image/home_tip_arrow.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "nuoMiC2SectionOne",
      props:["date12"],
      methods:{
        getMovie(id2){
          this.$router.push({
            name: 'nuoMiC3',
            params:{
              id2: id2
            }
          });
          console.log("id2:"+id2)
        }
      }
    }
</script>

<style scoped>
  .section_one{
    width: 100%;
    padding-top: 0.47rem;
  }
  .section_one_top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 92%;
    padding: 0.36rem 0.15rem 0.1rem;
  }
  .section_one_left{
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
  .section_le_img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .section_one_left_le span{
    width: 0.2rem;
    height: 0.2rem;
    display: block;
    border-radius: 50%;
    background: rgba(0,0,0,0.6);
    position: absolute;
    bottom: 0.1rem;
    left: 0.1rem;
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
    font-size: 0.17rem;
    color: #fff;
    font-weight: 100;
  }
  .section_one_left_mid span{
    font-size: 0.17rem;
    color: #fec647;
    display: flex;
    align-items: flex-start;
    line-height: 0.36rem;
  }
  .section_one_left_mid span span{
    font-size: 0.12rem;
  }
  .section_one_left_mid p{
    font-size: 0.12rem;
    color: #fff;
    line-height: 0.32rem;
    margin-top: 0.21rem;
  }
  .section_one_left_mid i{
    font-size: 0.12rem;
    color: #fff;
    font-style: normal;
    display: block;
  }
  .section_one_right img{
    width: 0.08rem;
    height: 0.14rem;
  }

</style>
