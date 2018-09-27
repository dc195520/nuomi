<template>
    <div>
        <div class="e_item">
            <a class="e_list1" href="javascript:;">美食<span></span></a>
            <a class="e_list2" href="javascript:;">附近<span></span></a>
            <a class="e_list3" href="javascript:;">综合榜<span></span></a>
            <a class="e_list4" href="javascript:;">筛选<span></span></a>
        </div>
        <section v-for="i in sections" :key="i.id"  @click="go(i.shopId)">
            <div class="sLeft">
                <img :src=i.shopimg alt="">
            </div>
            <div class="sRight">
                <div class="sRightOne">
                    <h2>{{i.shopName}}</h2>
                    <span>{{i.shopDistant}}m</span>
                </div>
                <div class="sRightTwo">
                    <label>暂无评分</label>
                    <span>￥{{i.shopPrice}}/人</span>
                    <i>{{i.shopPosi}}</i>
                </div>
                <div class="sRightThree">
                    <img :src=i.shopActivity alt="">
                    <span>{{i.shopActivityName}}</span>
                </div>
                <div class="sRightFour">
                    <p>{{i.shopEvaluation}}</p>
                </div>
            </div>
        </section>
</div>

</template>

<script>
export default {
  name: 'meiShiSection',
  props:["sections"],
  methods: {
    go(shopId){
      // console.log(shopId);
      this.$router.push({ path:"/dmsdetails1/"+shopId})
    }
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.e_item{
    display:flex;
    justify-content: space-around;
    height: 0.39rem;
    line-height: 0.39rem;
    border-bottom:1px solid #e8e8e8;
}
.e_item a{
    display:block;
    font-size:0.13rem;
    color:#808082;
}
.e_item span{
    display: inline-block;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top: 5px solid #646464;
    vertical-align: middle;
    margin-left: 0.05rem;
}
/* 美食Item */
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
