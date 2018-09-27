<template>
    <div>
        <header>
            <div class="e_hImg">
                <img src="../../assets/images/back_btn_normal.png" alt="" @click="back()">
            </div>
            <span>商家相册</span>
        </header>
        <nav>
            <a @click="show(1)" href="javascript:;" >菜品</a>
            <a @click="show(2)" href="javascript:;" >全部</a>
        </nav>
        <cai-pin1  v-if="flag==1" :id32="id31"></cai-pin1>
        <quan-bu1  v-if="flag==2" :id33="id31"></quan-bu1>
    </div>
</template>

<script>
import caiPin1 from "./section/caiPin1"
import quanBu1 from "./section/quanBu1"
export default {
  name: 'businessPhotoNav1',
  components:{caiPin1,quanBu1,},
  props:["id31"],
  data(){
      return {
          flag:1,
      }
  },
  methods:{
      show(f){
          this.flag=f;
      },
      back(){
          this.$router.go(-1)
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* header */
header{
    display:flex;
    height:0.35rem;
    border-bottom:1px solid #afafaf;
}
.e_hImg{
    display:block;
    width:0.16rem;
    height:0.2rem;
    margin-left:0.13rem;
    margin-top:0.07rem;
}
.e_hImg img{
    width: 100%;
    height:100%;
}
header span{
    margin-left:1.3rem;
    font-size:0.15rem;
    color:#1f1f2b;
    line-height: 0.35rem;
    font-weight: 600;
}
/* nav */
nav{
    display:flex;
    justify-content: space-around;
    line-height:0.34rem;

}
nav a{
    font-size: 0.14rem;
    color:#676767;
    border-bottom:1px solid transparent;
}
nav a:hover{
    color:#323232;
    border-bottom:1px solid #323232;
}




</style>
