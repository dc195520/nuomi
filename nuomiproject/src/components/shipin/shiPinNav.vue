<template>
    <div>
        <header>
            <div class="e_hBox">
                <a :class="{'class-a':active==1}" @click="show(1)" href="javascript:;">推荐</a>
                <a :class="{'class-a':active==2}" @click="show(2)" href="javascript:;">美食</a>
                <a :class="{'class-a':active==3}" @click="show(3)" href="javascript:;">搞笑</a>
                <a :class="{'class-a':active==4}" @click="show(4)" href="javascript:;">娱乐</a>
                <a :class="{'class-a':active==5}" @click="show(5)" href="javascript:;">生活</a>
                <a :class="{'class-a':active==6}" @click="show(6)" href="#">美妆</a>
                <a :class="{'class-a':active==7}" @click="show(7)" href="#">旅游</a>
                <a :class="{'class-a':active==8}" @click="show(8)" href="#">旅游</a>
                <a :class="{'class-a':active==9}" @click="show(9)" href="#">旅游</a>
                <a :class="{'class-a':active==10}" @click="show(10)" href="#">旅游</a> 
            </div>
        </header> 
        <tui-jian v-if="flag==1"
            :listOne="list1"
        ></tui-jian>
        <mei-shi  v-if="flag==2"
            :listTwo="list2"
        ></mei-shi>
        <gao-xiao v-if="flag==3"
            :listThree="list3"
        ></gao-xiao>
        <yue-le   v-if="flag==4"></yue-le>
    </div>
</template>
 
<script>
import tuiJian from "./section/tuiJian"
import meiShi from "./section/meiShi"
import gaoXiao from "./section/gaoXiao"
import yueLe from "./section/yueLe"
export default {
    name: 'shiPinNav',
    components:{tuiJian,meiShi,gaoXiao,yueLe},
    props:["list1","list2","list3"], 
    data(){
        return {
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
    width:100%;
    overflow-x: scroll;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 999;
}
header::-webkit-scrollbar{
  height:0;
}
.e_hBox{
    width:7rem;
}
.e_hBox a{
    font-size:0.14rem;
    margin:0 0.15rem;
    line-height: 0.4rem;
    text-align: center;
    color:#000;
    float: left;
    border-bottom:2px solid transparent;
}
.e_hBox .class-a{
    border-bottom:2px solid #000;
    color:skyblue;
    font-weight: bolder;
}

</style>
