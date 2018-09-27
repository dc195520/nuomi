<template>
    <div class="e_bg">
        
        <section v-for="v in listOne.shipinItem" :key="v.id">
            <div class="videoBox">
                <video class="video" id="vd" :src=v.shipinUrl  controls poster="../../../assets/images/ljz.gif"></video>
            </div>
            <div class="v_words">
                <div class="v_words_top">
                    <p>{{v.shiPinTitle}}</p>
                </div>
                <div class="v_words_bot">
                    <span>{{v.shipinFrom}}</span>
                    <div class="v_words_img">
                        <a href="#"><img src="../../../assets/images/a_1.png" alt=""></a>
                        <a href="#"><img src="../../../assets/images/a_2.png" alt=""></a>
                        <a href="#"><img src="../../../assets/images/a_3.png" alt=""></a>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
export default {
  name: 'tuiJian',
  props:["listOne"],
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.e_bg{
    background: #ddd;
    margin-top:0.42rem;
    margin-bottom:0.5rem;
}
section{
    /* height:3.03rem; */
    margin-bottom:0.08rem;
    background:#fff;
}
.videoBox{
    width:100%;
    /* height:2.12rem; */
}
.video{
    width:100%;
    /* height:2.12rem; */
}
.v_words{
    width:100%;
    height:0.91rem;
    padding-left:0.15rem;
    box-sizing: border-box;
    margin-top:0.11rem;
}
.v_words_top{
    width:3.3rem;
    height:0.55rem;
}
.v_words_top p{
    width:3.2rem;
    font-size:0.18rem;
    line-height:0.2rem;
    color:#000;
}
.v_words_bot{
    display:flex;
    justify-content: space-between;
    width:100%;
    height:0.36rem;
    box-sizing: border-box;
}
.v_words_bot span{
    font-size: 0.12rem;
    color:#a1a1a1;
}
.v_words_img{
    display:flex;
    justify-content: space-around;
    width:1.9rem;
    height:100%;
}
.v_words_img a img {
    width:0.19rem;
    height:0.21rem;
}

</style>
