<template>
    <div class="e_bg">
        <section v-for="(i,index) in listOne" :key="index.id">
            <div class="e_s_img"> 
                <img v-lazy=i.shopImg alt="">
            </div>
            <div class="e_s_words">
                <div class="s_words_top">
                    <p>{{i.shopTitle}}</p>
                </div>
                <div class="e_s_words_bot">
                    <span>{{i.talkFrom}}</span>
                    <label>{{i.browse}}浏览</label>
                </div>
            </div>
        </section>
        <div class="e_secImg">
            <h3>{{itemOne.itemTitle}}</h3>
            <div class="e_tuiImg">
                <!-- <img :src=itemOne.itemImg alt=""> -->
                 <img v-lazy=itemOne.itemImg alt="">
            </div>
            <div class="e_tuiFot">
                <span>{{itemOne.talkFrom}}</span>
                <p>{{itemOne.browse}}浏览</p>
            </div>
        </div>

        <section v-for="(n,index) in listTwo" :key="index.id">
            <div class="e_s_img"> 
                <img v-lazy=n.shopImg alt="">
            </div>
            <div class="e_s_words">
                <div class="s_words_top">
                    <p>{{n.shopTitle}}</p>
                </div>
                <div class="e_s_words_bot">
                    <span>{{n.talkFrom}}</span>
                    <label>{{n.browse}}浏览</label>
                </div>
            </div>
        </section>
        <div class="e_secImg">
            <h3>{{itemTwo.itemTitle}}</h3>
            <div class="e_tuiImg">
                <img v-lazy=itemTwo.itemImg alt="">
            </div>
            <div class="e_tuiFot">
                <span>{{itemTwo.talkFrom}}</span>
                <p>{{itemTwo.browse}}浏览</p>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
  name: 'tuiJianSection',
  props:["listOne","itemOne","listTwo","itemTwo",],
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.e_bg{
    margin-top:0.87rem;
    margin-bottom:0.5rem;
}
/*section*/
section{
    display:flex;
    width:100%;
    height:1.2rem;
    padding:0.15rem 0.20rem;
    box-sizing: border-box;
    border-bottom:1px solid #ddd;
    background: #fff;
}
.e_s_img{
    width:1.1rem;
    height:100%;
}
.e_s_img img{
    width:1.1rem;
    height:0.83rem;
    /*vertical-align: middle;*/
}
.e_s_words{
    flex:1;
    margin-left:0.08rem;
}
.e_s_words_top{
    width:100%;
    height:0.47rem;
}
.e_s_words_top p{
    font-size: 0.16rem;
    color:#000;
    line-height:0.27rem;
    text-indent: 5px;
    font-weight: bolder;
}
.e_s_words_bot{
    display:flex;
    justify-content: space-between;
    margin-top:0.2rem;
}
.e_s_words_bot span{
    font-size: 0.14rem;
    color:#d4d4d4;
}
.e_s_words_bot label{
    font-size: 0.14rem;
    color:#d4d4d4;
}
/* 图片 */
.e_secImg{
    height:3.25rem;
    padding:0 0.15rem;
    box-sizing: border-box;
    border-bottom:1px solid #e1e1e1;
}
.e_secImg h3{
    color:#2f2f2f;
    font-size:0.17rem;
    margin-top:0.14rem;
    line-height:0.26rem;
}
.e_tuiImg{
    height:2.11rem;
    margin-top:0.08rem;
}
.e_tuiImg img{
    width:100%;
    height: 100%;
}
.e_tuiFot{
    display:flex;
    justify-content: space-between;
    margin-top:0.11rem;

}
.e_tuiFot span{
    color:#b9b9b9;
    height:0.12rem;
}
.e_tuiFot p{
    color:#b9b9b9;
    height:0.12rem;
}
</style>
