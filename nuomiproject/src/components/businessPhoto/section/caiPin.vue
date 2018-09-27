<template>
    <div class="e_bgImg">
        <a href="javascript:;">
            <img :src=one.goodsImg alt="">
        </a>
        <a href="javascript:;" v-for="k in one.businessPhoto" :key="k.id">
            <img :src=k.businessImg alt="">
        </a>
    </div>
</template>

<script>
export default {
  name: 'caiPin',
  props:["one"],
  
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
