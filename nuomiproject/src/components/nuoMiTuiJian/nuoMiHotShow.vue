<template>
     <div class="b-nuoMi-show">
        <div class="b-nuoMi-show-top">
          <p>热门演出</p>
           <div class="b_nuoMi_show_top_more">
             <span>更多</span><img src="../../assets/image/triangle.png" alt="">
           </div>
        </div>
        <div class="b-nuoMi-show-lister"  >
          <div class="b-nuoMi-show-lister1" v-for= "hoterlist in hoter"  @click="getMovie(hoterlist.movieId)">
              <img :src=hoterlist.movieImg >
              <p class="p-name">{{hoterlist.movieIntro}}</p>
          </div>
        </div>
     </div>
</template>

<script>
    export default {
        name: "nuoMiHotShow",
        props:["hoter"],
       methods: {
        getMovie(id1){
          this.$router.push({
            name:"nuoMiC2",
            params: {
              id1: id1
            }
          })
        }
      }
    }
</script>

<style scoped>
.b-nuoMi-show{
  margin-bottom: 0.1rem;
  background: #ffffff;
}
  .b-nuoMi-show-top{
    padding: 0 0.15rem;
    display:flex;
    justify-content: space-between;
    line-height:0.48rem;
    align-items:center;
  }
  .b-nuoMi-show-top p{
     font-size:0.18rem;
     color:#080808 ;
  }
  .b_nuoMi_show_top_more{
     display: flex;
     align-items: center;
  }
  .b_nuoMi_show_top_more span{
     font-size:0.12rem;
     color:#b1b1b1 ;
  }
 .b_nuoMi_show_top_more img{
     width:0.07rem;
     height:0.12rem;
     margin-left: 0.05rem;
  }
  .b-nuoMi-show-lister{
     display: flex;
     overflow-y: hidden;
     overflow-x: scroll;
     padding-left: 0.15rem;
  }
  .b-nuoMi-show-lister1{
    margin-right: 0.06rem;
  }
  .b-nuoMi-show-lister1 img{
      width: 1.1rem;
      height: 1.54rem;
  }
  .b-nuoMi-show-lister1 p{
     width: 95%;
     line-height:0.22rem ;
     font-size:0.14rem ;
     color:#1d1d1d ;
     overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 0.08rem;
  }
.b-nuoMi-show-lister::-webkit-scrollbar{
     height: 0;
}
.b-nuoMi-show-lister .b-nuoMi-show-lister1:last-child{
  padding-right: 0.15rem;
}

</style>
