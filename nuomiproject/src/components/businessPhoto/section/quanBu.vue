<template>
    <div class="e_bgImg">
        <a href="javascript:;">
            <img :src=one1.goodsImg alt="">
        </a>
        <a href="javascript:;" v-for="k in one1.businessPhoto" :key="k.id">
            <img :src=k.businessImg alt="">
        </a>
        <a href="javascript:;" v-for="m in one1.recommendFood" :key="m.id">
            <img :src=m.recommendFoodsImg alt="">
        </a>
        <a href="javascript:;">
            <img src="../../../../static/data/image/d3.gif" alt="">
        </a>
    </div>
</template>

<script>
export default {
  name: 'quanBu',
  props:["one1"],
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.e_bgImg{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background:#ddd;
    box-sizing: border-box;
    padding: 0 0.08rem;
}
.e_bgImg a{
    display:block;
    width:1.72rem;
    height:1.06rem;
    margin-top:0.13rem;
    box-sizing: border-box;
}
.e_bgImg a img{
    width:100%;
    height:100%;
}
</style>

