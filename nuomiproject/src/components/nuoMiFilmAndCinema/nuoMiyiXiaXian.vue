<template>
     <div>
         <img class="b_swiper" src="../../assets/image/timg1.jpg" alt="">
        <div class="b_nuomi_move_infor">
           <div class="b_nuomi_move_infor_list" v-for="test6 in qty" >
             <img class="b_nuomi_move_inforimg " :src=test6.movieImg >
             <div class="b_nuomi_move_infor_lista">
               <p class="b_nuomi_move_infor_list_title">
                 {{test6.movieName}}
               </p>
               <div class="b_like_see">
                 <p>{{test6.movieShowTime}}</p>
                 <span>|</span>
                 <p>{{test6.movieScore}}</p>
                 <p>分</p>
               </div>
               <div class="b_file_cime2_title">
                   <p>{{test6.movieTitle}}</p>
                   <p><span>{{test6.movieSumTime}}</span>，<span>{{test6.movieClassify}}</span></p>
               </div>
             </div>
           </div>

         </div>

     </div>
</template>

<script>

    export default {
      name: "nuoMiyiXiaXian",
      components: {},
      props:["qty"],
    }
</script>

<style scoped>
  .b_swiper{
    width: 100%;
    height: 0.82rem;
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
  }
  .b_nuomi_move_inforimg{
    width:0.87rem ;
    height:1.14rem ;
  }
  .b_nuomi_move_infor_lista{
    padding: 0 0.15rem;
    width: 67%;
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
  .b_file_cime2_title{
    width: 95%;
    margin-top: 0.24rem;
  }
  .b_file_cime2_title p{
    line-height:0.23rem;
    font-size:0.12rem;
    color:#a4a4a4 ;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
