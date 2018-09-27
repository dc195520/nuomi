<template>
    <div class="e_bgImg">
        <a href="javascript:;">
            <img src="../../../../static/data/images/sjxc6.jpg" alt="">
        </a>
        <a href="javascript:;">
            <img src="../../../../static/data/images/sjxc5.jpg" alt="">
        </a>
        <a href="javascript:;">
            <img src="../../../../static/data/images/sjxc4.jpg" alt="">
        </a>
        <a href="javascript:;">
            <img src="../../../../static/data/images/sjxc3.jpg" alt="">
        </a>
        <a href="javascript:;">
            <img src="../../../../static/data/images/sjxc2.jpg" alt="">
        </a>
        <a href="javascript:;">
            <img src="../../../../static/data/images/sjxc1.jpg" alt="">
        </a>
    </div>
</template>

<script>
export default {
  name: 'quanBu',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.e_bgImg{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background:#f3f6f5;
    box-sizing: border-box;
}
.e_bgImg a{
    display:block;
    width:1.42rem;
    height:1.06rem;
    margin-top:0.13rem;
    box-sizing: border-box;
}
.e_bgImg a img{
    width:100%;
    height:100%;
}
</style>

