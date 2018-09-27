<template>
    <div>
        <mei-shi-nav></mei-shi-nav>
        <mei-shi-swiper></mei-shi-swiper>
        <mei-shi-section :sections="dats"></mei-shi-section>
    </div>
</template>

<script>
import meiShiNav from "../components/meiShi/meiShiNav";
import meiShiSwiper from "../components/meiShi/section/meiShiSwiper";
import meiShiSection from "../components/meiShi/section/meiShiSection";
export default {
  name: 'meiShi',
  components:{
      meiShiNav,meiShiSwiper,meiShiSection
  },
  data(){
    return{
      dats:[],
    }
  },
  created(){
    this.$nextTick(function(){
      fetch("http://localhost:3000/api/mock2").then((response)=>{
        if(response.ok){
          response.json().then(data=>{
            this.dats=data[0].msclassid;
          })
        }
      });
    })
  }

}
</script>

<style scoped>

</style>
