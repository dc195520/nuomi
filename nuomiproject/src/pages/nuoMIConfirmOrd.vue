<template>
    <div>
      <div class="nuoMiChioce">
        <img @click="back" class="nuoMiChioceImg" src="./../assets/image/sapi_sdk_bottom_back.png" alt="">
        <div class="nuoMiMoveName">
          确认订单
        </div>
      </div>
        <nuo-mi-confirm-section :date="date" class="confirmsection3333"></nuo-mi-confirm-section>
       <div class="b_nuoMIconfirmFooter">
          <div class="b_nuoMIconfirmFooterL">
             <div class="b_nuoMIconfirmFooterpay"><p>实付</p><span>￥</span><span class="b_pricenum"></span></div>
             <div class="b_nuoMIconfirmFootermore"><p>明细</p><img  class="b_ord1" src="./../assets/image/b_ord1.png" alt=""></div>
          </div>
          <div class="b_nuoMIconfirmFooterR" @click="test()">
            立即支付
          </div>
       </div>
    </div>
</template>

<script>

    import NuoMiConfirmSection from "../components/nuoMiConfirmOrd/nuoMiConfirmSection";
    export default {
        name: "nuoMIConfirmOrd",
        components: {NuoMiConfirmSection},
        data(){
        return{
          date:[]
        }
      },
        methods:{
        back() {
          this.$router.go(-1);
        },
        test(){
          this.$router.push({
            name:"dmytwo",
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
        created() {
        let movieId = this.$route.params.id6;
        this.init(movieId);
        console.log("movieId:" + movieId);
      }
    }
</script>

<style scoped>
  .confirmsection3333{
    height: 80%;
  }

  .nuoMiChioce{
    position: relative;
    width: 100%;
    background: #ffffff;
    height: 0.44rem;
    border-bottom: 1px solid #dddddd;
  }
  .nuoMiChioceImg{
    position: absolute;
    top:0.15rem;
    left:0.15rem;
    width: 0.09rem;
    height: 0.11rem;
  }
  .nuoMiMoveName{
    position: absolute;
    left:40%;
    top:24%;
    text-align: center;
    font-size:0.17rem;
    color:#000007 ;
  }

  .b_nuoMIconfirmFooter{
     width: 100%;
     position: fixed;
     bottom: 0;
     height:0.47rem;
     border-top:1px solid #eff2f1;
     display: flex;
     justify-content: space-between;
  }
  .b_nuoMIconfirmFooterL{
    width:72% ;
    padding: 0 0.14rem;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .b_nuoMIconfirmFooterpay{
      display: flex;
  }
  .b_nuoMIconfirmFooterpay p{
     font-size: 0.15rem;
     color: #85858a;
  }
  .b_nuoMIconfirmFooterpay span{
     font-size: 0.15rem;
     color:#9d701f;
  }
  .b_nuoMIconfirmFootermore{
          display: flex;
      align-items: center;
  }
  .b_nuoMIconfirmFootermore p{
      font-size:0.12rem ;
      color: #98989c;
  }
  .b_ord1{
    width: 0.11rem;
    height: 0.06rem;
    margin-left: 0.07rem;
  }
  .b_nuoMIconfirmFooterR{
    width:1rem ;
    height:0.47rem ;
    background:#bf974d ;
    line-height: 0.47rem;
    text-align: center;
    color: #ffffff;
  }

</style>
