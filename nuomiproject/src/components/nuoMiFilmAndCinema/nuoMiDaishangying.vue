<template>
    <div>
      <div class="md_header">
        <img class="md_show" src="../../assets/image/timg4.jpg" alt="">
        <div class="md_showfile">
          <p class="move_show_title">新片热度排行</p>
          <div class="move_show23">
               <div class="file_listty" v-for="test3  in quest">
                    <h5  :class="{yelTag:test3.movieType==('特惠'||'新片'),blueTag:test3.movieType=='预售'}">{{test3.movieType}}</h5>
                    <img class="b_file_list_img"  :src=test3.movieImg  @click="getMovie(test3.movieId)">
                    <div class="file_list_like">
                       <span>86783</span>
                       <p>人想看</p>
                     </div>
                    <p class="b_file_name">{{test3.movieName}}</p>
                    <div class="file_list_time111">
                         <p>{{test3.showTime}}</p>
                         <img src="../../assets/image/b_like.png" alt="">
                     </div>
               </div>

          </div>
        </div>
      </div>
      <div class="b_nuomi_move_infor">
         <div class="b_nuomi_move_infor_list" v-for="quest3  in quest">
             <h5  :class="{yelTag1:quest3.movieType==('特惠'||'新片'),blueTag1:quest3.movieType=='预售'}">{{quest3.movieType}}</h5>
             <img class="b_nuomi_move_inforimg " :src=quest3.movieImg   @click="getMovie(quest3.movieId)">
             <div class="b_nuomi_move_infor_lista" @click="getMovieInfor(quest3.movieId)">
                <div class="b_moveting">
                  <p class="b_nuomi_move_infor_list_title">
                    {{quest3.movieName}}
                  </p>
                  <p class="b_moveting22">{{ quest3.moveTing}}</p>
                </div>
                <div class="b_like_see">
                  <p>{{quest3.movieShowTime}}</p>
                  <span>|</span>
                  <p>181</p>
                  <p>人想看</p>
                </div>
               <div class="b_file_cime2">
                 <div class="b_file_cime2_title">
                   <p>{{quest3.movieTitle}}</p>
                   <p>{{quest3.movieIntro}}</p>
                 </div>
                 <span class="b_nuomi_buy">想看</span>
               </div>

            </div>

         </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "nuoMiDaishangying",
        props:["quest"],
       methods: {
        getMovie(id1){
          this.$router.push({
            name:"nuoMiC2",
            params: {
              id1: id1
            }
          })
        },
         getMovieInfor(id2){
           this.$router.push({
             name:"nuoMiC3",
             params: {
               id2: id2
             }
           })
         }
      }
    }
</script>

<style scoped>
  .md_header{
    margin-bottom: 0.1rem;
    background: #ffffff;
    letter-spacing: 1px ;
  }
  .md_show{
    width: 100%;
    height: 0.82rem;
  }
  .move_show_title{
    line-height: 0.42rem;
    font-size:0.15rem;
    color: #1e1e1e;
  }
  .md_showfile{
    padding-left: 0.13rem;
  }
  .move_show23{
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
  }
  .move_show23::-webkit-scrollbar{
    height: 0;
  }
  .file_listty{
    margin:0.03rem;
    position: relative;
    padding-bottom: 0.1rem;
  }
  .b_file_list_img{
    width:0.93rem;
    height:1.23rem;
  }
  .file_list_like{
    position: absolute;
    top:1.0rem;
    left:0.05rem;
    display: flex;
    background: #391e21;
    opacity: 0.5;
  }
  .file_list_like span{
    line-height: 0.21rem;
    font-size:0.1rem ;
    color: #ffffff;
  }
  .file_list_like p{
    line-height: 0.21rem;
    font-size:0.1rem ;
    color: #ffffff;
  }
  .b_file_name{
    margin-top: 0.08rem;
    line-height: 0.21rem;
    font-size:0.13rem;
    color:#282828 ;
    white-space: nowrap;
    overflow: hidden;
    width: 77%;
  }
  .file_list_time111{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .file_list_time111 p{
    line-height: 0.23rem;
    font-size:0.12rem;
    color:#929292 ;
  }
  .file_list_time111 img{
    width:0.23rem ;
    height: 0.23rem;
  }
  .move_show .file_listty:last-child{
    padding-right: 0.15rem;
  }
  .b_nuomi_move_infor{
    margin-bottom: 0.1rem;
    background: #ffffff;
    padding-left: 0.15rem;
  }
  .b_nuomi_move_infor_list{
    padding-top: 0.15rem;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    position: relative;
  }
  .b_nuomi_move_inforimg{
    width:0.87rem ;
    height:1.14rem ;
  }
  .b_nuomi_move_infor_lista{
    padding: 0 0.15rem;
    width: 67%;
  }
  .b_moveting{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .b_moveting22{
    line-height:0.19rem ;
    background: #7b88c3;
    border-radius: 0.1rem;
    font-size:0.09rem ;
    color:#ffffff;
    padding: 0 0.06rem;
  }
  .b_nuomi_move_infor_list_title{
     line-height: 0.26rem;
     font-size:0.16rem ;
     color:#2b2b2b ;
  }
  .b_like_see{
    display: flex;
    line-height: 0.2rem;

  }
  .b_like_see p{
    color: #f6983a;
    font-size:0.12rem;
  }
  .b_like_see span{
    color: #f6983a;
    font-size:0.12rem;
    margin: 0 0.1rem;
  }

  .b_file_cime2{
    display: flex;
    align-items: center;
    margin-top: 0.24rem;
    justify-content: space-between;
  }
  .b_nuomi_buy{
    padding: 0 0.19rem;
    line-height:0.25rem ;
    border-radius:0.12rem ;
    font-size:0.13rem ;
    color:#9f955a ;
    border: 2px solid #cecdb2;
  }
  .b_file_cime2_title{
     width: 70%;
  }
  .b_file_cime2_title p{
    line-height:0.23rem;
    font-size:0.12rem;
    color:#a4a4a4 ;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .yelTag{
    position: absolute;
    top:-3px;
    left:-3px;
    width:0.33rem;
    height:0.19rem;
    line-height: 0.19rem;
    text-align: center;
    background: #c29944;
    color: #ffffff;
    font-size: 0.11rem;
  }
  .blueTag{
    position: absolute;
    top:-3px;
    left:-3px;
    width:0.33rem;
    height:0.19rem;
    line-height: 0.19rem;
    text-align: center;
    background: #4cb3ff;
    color: #ffffff;
    font-size: 0.11rem;
  }
  .yelTag1{
    position: absolute;
    top:12px;
    left:-2px;
    width:0.33rem;
    height:0.19rem;
    line-height: 0.19rem;
    text-align: center;
    background: #c29944;
    color: #ffffff;
    font-size: 0.11rem;
  }
  .blueTag1{
    position: absolute;
    top:12px;
    left:-2px;
    width:0.33rem;
    height:0.19rem;
    line-height: 0.19rem;
    text-align: center;
    background: #4cb3ff;
    color: #ffffff;
    font-size: 0.11rem;
  }
</style>
