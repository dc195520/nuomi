<template>
     <div class="b-reying">
       <img class="b_reyingImg" src="../../assets/image/timg8.jpeg" >
        <div class="b_hot_show1">
            <div class="b_hot_showinf" v-for="movinf  in quest">
              <h5  :class="{yelTag2:movinf.movieType==('特惠'||'新片'),blueTag2:movinf.movieType=='预售'}">{{movinf.movieType}}</h5>
              <div  class="b_hot_showinf1">
                 <img class="b_hot_inf_img" :src=movinf.movieImg  @click="getMovie(movinf.movieId)" >
                 <div class="b_hot-file-inf"  @click="getMovieInfor(movinf.movieId)">
                   <div class="b_file_cine">
                     <p>{{movinf.movieName}}</p>
                     <p>{{ movinf.moveTing}}</p>
                   </div>
                   <div class="b_file_cime1">
                     <img src="../../assets/image/star.png" >
                     <span>{{movinf.movieScore}}</span>
                   </div>
                   <div class="b_file_cime2">
                     <div class="b_file_cime2_title">
                       <div>{{movinf.movieTitle}}</div>
                       <div><span>{{movinf.movieSumTime}}</span> ,<span>{{movinf.movieClassify}}</span></div>
                     </div>
                     <span class="b_nuomi_buy">购票</span>
                   </div>

                 </div>
               </div>
               <div class="b_hot_add">
                <span>资讯</span>
                <p  class="b_hot_add_p">{{movinf.movieIntro}}</p>
              </div>
            </div>
        </div>
        <div class="b_hot_show1">
         <div class="b_hot_showinf" v-for="movinf  in quest">
           <h5  :class="{yelTag2:movinf.movieType==('特惠'||'新片'),blueTag2:movinf.movieType=='预售'}">{{movinf.movieType}}</h5>
           <div  class="b_hot_showinf1">
             <img class="b_hot_inf_img" :src=movinf.movieImg  @click="getMovie(movinf.movieId)">
             <div class="b_hot-file-inf" @click="getMovieInfor(movinf.movieId)">
               <div class="b_file_cine">
                 <p>{{movinf.movieName}}</p>
                 <p>{{ movinf.moveTing}}</p>
               </div>
               <div class="b_file_cime1">
                 <img src="../../assets/image/star.png" alt="">
                 <span>{{movinf.movieScore}}</span>
               </div>
               <div class="b_file_cime2">
                 <div class="b_file_cime2_title">
                   <div>{{movinf.movieTitle}}</div>
                   <div>{{movinf.movieSumTime}}，{{movinf.movieClassify}}</div>
                 </div>
                 <span class="b_nuomi_buy" @click="buy(movinf.movieId)">购票</span>
               </div>

             </div>
           </div>
         </div>


       </div>
     </div>
</template>

<script>
    export default {
        name: "nuoMiReYing",
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
            console.log("我是 C3"+id2)
          }
        }

    }
</script>

<style scoped>
  .b-reying{
    background: #ffffff;
    letter-spacing: 1px ;
  }
   .b_reyingImg{
     width: 100%;
     height: 0.82rem;
   }
   .b_hot_show1{
       margin-left: 0.15rem;
   }
   .b_hot_showinf{
     padding:0.13rem 0 0.11rem 0;
     border-bottom:1px solid #f6f6f6;
     position: relative;
   }
   .b_hot_showinf1{
     display: flex;
   }
  .yelTag2{
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
  .blueTag2{
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
   .b_hot_inf_img{
     width:0.85rem;
     height:1.14rem ;
   }
   .b_hot-file-inf{
      width: 70%;
     padding-left: 0.11rem;
     padding-right: 0.14rem;
   }
   .b_file_cine{
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
  .b_file_cine p:nth-child(1){
    line-height: 0.26rem;
    font-size:0.16rem ;
    color:#3b3b3b ;
  }
  .b_file_cine p:nth-child(2){
    line-height:0.19rem ;
    background: #7b88c3;
    border-radius: 0.1rem;
    font-size:0.09rem ;
    color:#ffffff;
    padding: 0 0.06rem;
  }
  .b_file_cime1{
    align-items: center;
    display: flex;
    margin-bottom: 0.24rem;
  }
  .b_file_cime1 img{
    width:0.63rem ;
    height:0.11rem ;
    margin-right: 0.05rem;
  }
  .b_file_cime1 span{
    line-height: 0.19rem;
    font-size: 0.1rem;
    color:#ff9b35 ;
  }
  .b_file_cime2{
    display: flex;
    /*align-items: center;*/
    justify-content: space-between;
    width: 100%;
  }
  .b_nuomi_buy{
    padding: 0 0.19rem;
    line-height:0.25rem ;
    height: 0.25rem;
    border-radius:0.12rem ;
    font-size:0.13rem ;
    color:#c1a672 ;
    border: 2px solid #cdb88e;
  }
  .b_file_cime2_title{
    width: 70%;
  }
  .b_file_cime2_title div{
    line-height:0.23rem;
    font-size:0.12rem;
    color:#a4a4a4 ;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 95%;
  }
  .b_hot_add{
    display: flex;
    width: 96%;
    align-items: center;
    margin-top: 0.1rem;
  }
  .b_hot_add span{
    width: 0.32rem;
    height: 0.17rem;
    line-height: 0.17rem;
    text-align: center;
    font-size: 0.11rem;
    border-radius: 3px;
    color: #fbae09;
    border:1px solid #fdde9c;
    margin-left: 0.52rem;
  }
  .b_hot_add p{
    margin-left: 0.11rem;
    line-height: 0.17rem;
    font-size: 0.11rem;
    color: #9d9d9d;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 70%;
  }
</style>
