<template>
  <div class="d4_tjcs">
    <!--d4_tjc-->
    <div class="d4_tjc">
      <h3>商家照片</h3>
      <img src="../../assets/images/d46.jpg" alt="">
    </div> 
    <div class="d4_tjc1" @click="goBusinessPhoto(one.shopId)">
      <a href="javascript:;" v-for="k in one.businessPhoto" :key="k.id">
        <img :src=k.businessImg alt="">
        <span>{{k.businessPhotoName}}({{k.businessPhotoNumber}})</span>
      </a>
      
    </div>
  </div>
</template>

<script>
    export default {
        name: "dmsdeailssjzp",
        props:["one"],

        methods:{
          goBusinessPhoto(id){
            this.$router.push({
              path:"businessPhoto",
              query:{
                id:id
              }
            })
          }
        },

    }
</script>

<style scoped>
  /**d4_tjc**/
  .d4_tjc{
    height: 0.4rem;
    background: #fff;

    line-height: 0.4rem;
    /*text-align: center;*/
    border-bottom: 1px solid #f3f6f5;
  }
  .d4_kx{
    width: 100%;
    height: 0.08rem;
    background: #f4f6f5;
  }
  .d4_tjc h3{
    font-size: 0.14rem;
    color: #0c0c0c;
    font-weight: 100;
    float: left;
    margin-left: 1.66rem;
  }
  .d4_tjc img{
    width: 0.06rem;
    height: 0.07rem;
    float: right;
    margin-top: 0.15rem;
    margin-right: 0.15rem;
  }
  /*d4_tjcs*/
  .d4_tjcs{
    background: #fff;
  }
  /*.d4_tjc1*/
  .d4_tjc1{
    height: 1.35rem;
    display: flex;
    padding: 0.1rem 0.14rem;
    overflow-x: scroll;
    box-sizing: border-box;
    width: 100%;
  }
  .d4_tjc1 a{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 0.02rem;
  }
  .d4_tjc1 a img{
    width: 1.12rem;
    height: 0.75rem;
  }
  .d4_tjc1 a span{
    font-size: 0.14rem;
    color: #575757;
    display: block;
    margin-top: 0.14rem;
  }
  .d4_cp{
    display: flex;
    flex-wrap: wrap;
    padding-left: 0.12rem;
  }
  .d4_cp li{
    display: block;
    font-size: 0.14rem;
    color: #000;
    line-height: 0.24rem;
    margin-bottom: 0.07rem;
    margin-top: 0.07rem;
    margin-right: 0.1rem;
  }
</style>
