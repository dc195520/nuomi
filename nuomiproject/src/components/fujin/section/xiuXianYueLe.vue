<template>
  <div class="e_bg"> 
    <section>
        <div class="sLeft">
            <img src="../../../assets/images/fj_xxyl1.png" alt="">
        </div>
        <div class="sRight">
            <div class="sRightOne">
                <h2>羽德羽毛球馆</h2>
                <span>100m</span>
            </div>
            <div class="sRightTwo">
                <label>暂无评分</label>
  
                <i>茶张村</i>
            </div>
            <div class="sRightThree">
                <img src="../../../assets/images/k_tuan.png" alt="">
                <span>49元团购羽德羽毛球一小时畅达</span>
            </div>
        </div>
    </section>
    <section>
        <div class="sLeft">
            <img src="../../../assets/images/fj_xxyl2.png" alt="">
        </div>
        <div class="sRight">
            <div class="sRightOne">
                <h2>超级bang轰趴馆(高级会所)</h2>
                <span>100m</span>
            </div>
            <div class="sRightTwo">
                <label>暂无评分</label>
                <i>茶张村</i>
            </div>
            <div class="sRightThree">
                <img src="../../../assets/images/k_tuan.png" alt="">
                <span>2180元团购超级bang豪华畅玩套餐</span>
            </div>
        </div>
    </section>
    <section>
        <div class="sLeft">
            <img src="../../../assets/images/fj_xxyl3.png" alt="">
        </div>
        <div class="sRight">
            <div class="sRightOne">
                <h2>天磊羽毛球馆(高级会所)</h2>
                <span>100m</span>
            </div>
            <div class="sRightTwo">
                <label>暂无评分</label>
                <span>￥97/人</span>
                <i>茶张村</i>
            </div>
            <div class="sRightThree">
                <img src="../../../assets/images/k_tuan.png" alt="">
                <span>1300元团购天磊游泳俱乐部1v2对教班</span>
            </div>
        </div>
    </section>
    <section>
        <div class="sLeft">
            <img src="../../../assets/images/fj_xxyl4.png" alt="">
        </div>
        <div class="sRight">
            <div class="sRightOne">
                <h2>嗷呜桌游吧</h2>
                <span>400m</span>
            </div>
            <div class="sRightTwo">
                <label>暂无评分</label>
                
                <i>唐延路南段</i>
            </div>
            <div class="sRightThree">
                <img src="../../../assets/images/k_tuan.png" alt="">
                <span>300元团购嗷呜桌游吧300包场套餐</span>
            </div>
        </div>
    </section>
    <section>
        <div class="sLeft">
            <img src="../../../assets/images/fj_xxyl3.png" alt="">
        </div>
        <div class="sRight">
            <div class="sRightOne">
                <h2>天磊羽毛球馆(高级会所)</h2>
                <span>100m</span>
            </div>
            <div class="sRightTwo">
                <label>暂无评分</label>
                <span>￥97/人</span>
                <i>茶张村</i>
            </div>
            <div class="sRightThree">
                <img src="../../../assets/images/k_tuan.png" alt="">
                <span>1300元团购天磊游泳俱乐部1v2对教班</span>
            </div>
        </div>
    </section>
    <section>
        <div class="sLeft">
            <img src="../../../assets/images/fj_xxyl4.png" alt="">
        </div>
        <div class="sRight">
            <div class="sRightOne">
                <h2>嗷呜桌游吧</h2>
                <span>400m</span>
            </div>
            <div class="sRightTwo">
                <label>暂无评分</label>
                
                <i>唐延路南段</i>
            </div>
            <div class="sRightThree">
                <img src="../../../assets/images/k_tuan.png" alt="">
                <span>300元团购嗷呜桌游吧300包场套餐</span>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'xiuXianYueLe',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.e_bg{
    margin-bottom:0.5rem;
}
section{
    display:flex;
    width:100%;
    height:1.2rem;
    padding:0 0.15rem;
    box-sizing: border-box;
    background:#fff;
}
.sLeft{
    width:1.11rem;
    height:100%;
    padding:0.18rem 0;
    box-sizing: border-box;
}
.sLeft img{
    width:1.11rem;
    height:0.85rem;
}
.sRight{
    flex:1;
    margin-left:0.08rem;
    padding-top:0.18rem;
    box-sizing: border-box;
}
.sRightOne{
    display:flex;
    justify-content: space-between;
    line-height: 0.25rem;
    color:#ababab;
}
.sRightOne h2{
    font-size:0.16rem ;
    color:#000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 1.92rem;
}
.sRightOne span{
    font-size:0.09rem ;

}
.sRightTwo{
    margin:0.03rem 0;
    font-size:0.13rem ;

}
.sRightTwo label{
    font-size: 0.1rem;
    color:#a7a7a7;
}
.sRightTwo  span{
    margin-left:0.06rem;
    font-size: 0.09rem;
    color:#a7a7a7;
}
.sRightTwo  i{
    margin-left:0.06rem;
    font-style: normal;
    font-size: 0.09rem;
    color:#a7a7a7;

}
.sRightThree{
    display:flex;
    margin-bottom:0.03rem;
    font-size:0.13rem ;
    color:#717171;
}
.sRightThree img{
    width:0.15rem;
    height:0.15rem;
    margin-top:2px; 

}
.sRightThree span{
    margin-left:0.09rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 1.92rem;
}
.sRightFour{
    font-size: 0.09rem;
    color:#c7b996;
}

</style>
