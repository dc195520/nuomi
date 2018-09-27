<template>
    <div class="e_bgImg" >
        <a href="javascript:;" v-for="k in id33.ProductDetails[0].recommendFood" :key="k.id">
            <img :src=k.recommendFoodsImg  alt="">
        </a>
    </div>
</template>

<script>

export default {
  name: 'quanBu1',
  props:["id33"]

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
  padding:0 0.08rem;
}
.e_bgImg a{
    display:block;
    width:1.75rem;
    height:1.08rem;
    margin-top:0.11rem;
    box-sizing: border-box;
}
.e_bgImg a img{
    width:100%;
    height:100%;
}
</style>

