<template>
    <div class="header">
        <header>
                <span>头条</span>
                <i class="iconfont icon-fangdajing"></i>
        </header>
        <nav>
            <div class="e_navBox">
                <a :class="{'class-a':active==1}" @click="show(1)" href="javascript:;">推荐</a>
                <a :class="{'class-a':active==2}" @click="show(2)" href="javascript:;">爱美食</a>
                <a :class="{'class-a':active==3}" @click="show(3)" href="javascript:;">排行榜</a>
                <a :class="{'class-a':active==4}" @click="show(4)" href="javascript:;">赏大片</a>
                <a :class="{'class-a':active==5}" @click="show(5)" href="javascript:;">趣休闲</a>
                <a :class="{'class-a':active==6}" @click="show(6)" href="javascript:;">享亲子</a>
                <a :class="{'class-a':active==7}" @click="show(7)" href="javascript:;">爱学习</a>
            </div>
        </nav>
        <div> 
            <tui-jian-section    v-show="flag==1"
                :listOne="list1" :itemOne="item1" 
                :listTwo="list2" :itemTwo="item2" 
            ></tui-jian-section>
            <ai-mei-shi v-show="flag==5"
                :listFour="list4"
            ></ai-mei-shi>
            <xiang-qin-zi v-show="flag==6"
                :listFive="list5"
            ></xiang-qin-zi>
            <ai-xue-xi v-show="flag==7"
                :listSix="list6"
            ></ai-xue-xi>
        </div>
    </div>

</template>

<script>
import tuiJianSection from "./section/tuiJianSection";
import aiMeiShi  from "./section/aiMeiShi";
import xiangQinZi from "./section/xiangQinZi"
import aiXueXi from "./section/aiXueXi"

export default {
    name: 'touTiaoNav',
    components:{tuiJianSection,aiMeiShi,xiangQinZi,aiXueXi},
    props:["list1","item1","list2","item2","list4","list5","list6"],
    data(){
        return{
            flag:1,
            active:1,
        }
    },
    methods:{
        show(f){
            this.flag=f;
            this.active=f;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*header*/
header{
    position: fixed;
    top:0;
    width:100%;
    height:0.41rem;
    background:#fbfbfb;
}
header span{
    margin-left:1.68rem;
    color:#000;
    font-size: 0.18rem;
    font-weight: bolder;
    line-height: 0.41rem;
}
.icon-fangdajing{
    font-weight: 600;
    font-size:0.25rem;
    margin-left:1.2rem;
    line-height:0.41rem ;
}
/*nav*/
nav{
    position: fixed;
    top:0.41rem;
    width: 100%;
    overflow-x: scroll;
    border-bottom:1px solid #ddd;
    background:#fff;
}
nav::-webkit-scrollbar{
  height:0;
}
.e_navBox{
    width: 6.5rem;
}
.e_navBox a{
    font-size:0.14rem;
    margin:0 0.12rem;
    line-height: 0.43rem;
    text-align: center;
    color:#000;
    float: left;
    border-bottom:2px solid transparent;
}
/* .navBox a:first-child{
    border-bottom:2px solid #000;
} */
.e_navBox .class-a{
    border-bottom:2px solid #000;
    color:skyblue;
    font-weight: bold;
}

</style>



