<template>
    <div class="e_bg">
        <section>
            <div class="videoBox">
              <video class="video" id="vd" src="../../../assets/video/viedo2.mp4" controls loop volumn poster="../../../assets/images/tubo.gif"></video>
            </div>
            <div class="v_words">
                <div class="v_words_top">
                  <p>香辣下饭爽脆可口的辣炒鸡胗，爱吃辣的我先收藏了</p>
                </div>
                <div class="v_words_bot">
                    <span>爱吃鸡的小哼哼</span>
                    <div class="v_words_img">                      
                        <a href="#"><img src="../../../assets/images/a_1.png" alt=""></a>
                        <a href="#"><img src="../../../assets/images/a_2.png" alt=""></a>
                        <a href="#"><img src="../../../assets/images/a_3.png" alt=""></a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="videoBox">
                <video class="video" id="vd" src="../../../assets/video/viedo3.mp4" controls poster="../../../assets/images/timg.gif"></video>
                
            </div>
            <div class="v_words">
                <div class="v_words_top">
                    <p>西安钟楼的夜景太美，让人忘记了此刻已经是凌晨</p>
                </div>
                <div class="v_words_bot">
                    <span>探探视频</span>
                    <div class="v_words_img">
                        <a href="#"><img src="../../../assets/images/a_1.png" alt=""></a>
                        <a href="#"><img src="../../../assets/images/a_2.png" alt=""></a>
                        <a href="#"><img src="../../../assets/images/a_3.png" alt=""></a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="videoBox">
                <video class="video" id="vd" src="../../../assets/video/viedo1.mp4" controls poster="../../../assets/images/timg.gif"></video>
            </div>
            <div class="v_words">
                <div class="v_words_top">
                    <p>爱吃鸡的别再用老办法了，学会这种新做法，请客吃饭它是最香的菜</p>
                </div>
                <div class="v_words_bot">
                    <span>家庭主厨黄小哥</span>
                    <div class="v_words_img">
                        <a href="#"><img src="../../../assets/images/a_1.png" alt=""></a>
                        <a href="#"><img src="../../../assets/images/a_2.png" alt=""></a>
                        <a href="#"><img src="../../../assets/images/a_3.png" alt=""></a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="videoBox">
                <video class="video" id="vd" src="../../../assets/video/viedo1.mp4" controls poster="../../../assets/images/ljz.gif"></video>
            </div>
            <div class="v_words">
                <div class="v_words_top">
                    <p>爱吃鸡的别再用老办法了，学会这种新做法，请客吃饭它是最香的菜</p>
                </div>
                <div class="v_words_bot">
                    <span>家庭主厨黄小哥</span>
                    <div class="v_words_img">
                        <a href="#"><img src="../../../assets/images/a_1.png" alt=""></a>
                        <a href="#"><img src="../../../assets/images/a_2.png" alt=""></a>
                        <a href="#"><img src="../../../assets/images/a_3.png" alt=""></a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="videoBox">
                <video class="video" id="vd" src="../../../assets/video/viedo1.mp4" controls poster="../../../assets/images/ljz.gif"></video>   
            </div>
            <div class="v_words">
                <div class="v_words_top">
                    <p>化妆到底多厉害？看看丑女化完妆的差别就知道了</p>
                </div>
                <div class="v_words_bot">
                    <span>娱乐放映</span>
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
  name: 'yueLe',
  
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
