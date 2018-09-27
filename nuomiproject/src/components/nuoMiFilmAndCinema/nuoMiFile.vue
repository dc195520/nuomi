<template>
    <div>


    </div>
</template>

<script>
    import NuoMiReYing from "./nuoMiReYing";
    import NuoMiDaishangying from "./nuoMiDaishangying";
    import NuoMiyiXiaXian from "./nuoMiyiXiaXian";
    export default {
        name: "nuoMiFile",
      components: {NuoMiyiXiaXian, NuoMiDaishangying, NuoMiReYing},
      data(){
        return{
          flag1:4,
          active1:4
        }
      },
      methods:{
        show1(f){
          this.flag1 = f,
            this.active1=f
        }
      }
    }
</script>

<style scoped>
  .b_file{
    width: 100%;
    background: #ffffff;
    height: 0.38rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #dcdcdc;
  }

  .b_file span{
    line-height: 0.38rem;
    color:#6d6d6d;
    font-size:0.14rem;
  }
  .b_file .change1{
    color:#121212;
    font-weight: 600;
    border-bottom: 2px solid #2b2b2b;
    box-sizing: border-box;
  }
</style>
