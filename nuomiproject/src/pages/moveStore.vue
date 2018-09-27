<template>
   <div class="b_store">
        <div class="b_store_top">
          <img @click="back" class="b-go" src="../assets/image/component_actionbar_back_ic.png" alt="">
          <p>{{date.movieTheaterNamesd}}</p>
          <img  class="b-sm" src="../assets/image/stars.png" alt="">
          <img  class="b-sm" src="../assets/image/b_more.png" alt="">
       </div>
        <div class="b_store_move">
          <div class="b_store_movel">
            <div class="b_store_movelname">
               <h5>{{date.movieTheaterNamesd}}</h5>
               <h6>{{date.movieTheaterLocationsd}}</h6>
            </div>
            <img class="b_store_movelm" src="../assets/image/daren_middle_more.png" alt="">
          </div>
          <div class="b_store_mover">
            <img src="../assets/image/b_map.png" alt="">
          </div>

       </div>
        <div  class="b_store_move_inf">
           <p class="b_store_move_inf_name" >{{date.movieName}}<span>{{date.movieScore1}}</span></p>
        </div>
        <div class="b_store_show_list">
            <div class="b_store_show">
               <div class="b_store_show1">
                 <p>{{date.movieTimeS}}</p>
                 <p>{{date.movieTimeE}}<span>散场</span></p>
               </div>
                <div class="b_store_show1  b-store3">
                  <p>{{date.movieLanguage}}</p>
                  <p>7号厅</p>
                </div>
              <div class="b_store_show2">
                <p>￥<span>{{date.movieMoney}}</span></p>
              </div>
              <div class="b_store_show3" @click="buy(date.movieId)">
                 立即购票
              </div>

            </div>
        </div>
   </div>

</template>

<script>
    export default {
        name: "moveStore",
        data(){
          return{
            date:[]
        }
      },
        methods:{
          back() {
            this.$router.go(-1);
          },
          buy(id5){
            this.$router.push({
              name:"nuoMiChioce",
              params: {
                id5: id5,
              }
            })
          },

        init(i){
            fetch("http://localhost:3000/movie/movie01?movieId="+i).then((response)=>{
            if(response.ok){
              response.json().then(data=>{
                this.date=data;
                console.log(this.date);
                console.log("i:"+i);
              });
            }
          });
        }
      },
        created(){
          let movieId=this.$route.params.id3;
          this.init(movieId);
          console.log("movieId:"+movieId);
       }
    }


</script>

<style scoped>
  .b_store{
    width: 100%;
  }
  .b_store_top{
    background: #ffffff;
    display: flex;
    height:0.42rem ;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #dddddd;
  }
  .b_store_top p{
    font-size:0.17rem ;
    color:#000000;
  }
  .b-go{
    width:0.09rem;
    height:0.17rem;
  }
  .b-sm{
    width: 0.19rem;
    height: 0.19rem;
  }
  .b_store_move{
    padding: 0 0.15rem;
    display: flex;
    justify-content: space-between;
     background: #ffffff;
    align-items: center;
  }
 .b_store_movel{
   width: 89%;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .b_store_movelname{

 }
  .b_store_movelname h5{
     font-size:0.15rem;
     font-weight: 100;
     color:#070707 ;
     margin-top:0.08rem ;
     line-height:0.29rem ;
  }
  .b_store_movelname h6{
    font-size:0.13rem;
    font-weight: 100;
    color:#999999 ;
    margin-bottom:0.1rem ;
    line-height:0.21rem ;
  }
  .b_store_movelm{
    width:0.06rem ;
    height:0.12rem ;
    margin: 0 0.17rem;
  }
  .b_store_mover{
    width: 0.41rem;
    height: 0.36rem;
  }
  .b_store_move_inf{
    background: #ffffff;
    margin-bottom:0.09rem;
  }
  .b_store_move_inf_name{
     margin-top: 0.07rem;
     line-height: 0.32rem;
     font-size: 0.16rem;
     color: #5f5f5f;
     text-align: center;
  }
  .b_store_move_inf_name span{
     color: #b68832;
     margin-left: 0.05rem;
  }
  .b_store_show_list{
    background:#ffffff ;
  }
  .b_store_show{
    width: 92%;
    margin-left: 0.15rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: 0.15rem;
    padding-top: 0.12rem;
    padding-bottom: 0.12rem;
    display: flex;
  }

  .b_store_show1 p:nth-child(1){
     line-height:0.22rem ;
     font-size: 0.14rem;
     color:#090909 ;
  }
  .b_store_show1 p:nth-child(2){
    line-height:0.2rem ;
    font-size:0.12rem;
    color:#cacaca ;
  }
  .b_store_show1{
    width: 23%;
  }
  .b-store3{
    width: 28%;
  }
  .b_store_show2{
    width: 29%;
  }
  .b_store_show2 p{
    color: #b2822a;
    line-height:0.2rem ;
    font-size:0.12rem;
  }
  .b_store_show3{
    height: 0.28rem;
    padding: 0 0.08rem;
    font-size: 0.12rem;
    line-height: 0.26rem;
    color:#b2822a ;
    border:1px solid #b2822a;
    border-radius: 0.11rem;
    margin-top: 0.02rem;
  }
</style>
