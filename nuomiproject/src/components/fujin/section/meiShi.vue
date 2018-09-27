<template>
  <div class="e_bg"> 
    <section v-for="(m,index) in list" :key="index" @click="gomsDetails(m.shopId)">
        <div class="sLeft">
            <img v-lazy=m.shopimg alt=""> 
        </div>
        <div class="sRight"> 
            <div class="sRightOne">
                <h2>{{m.shopName}}</h2>
                <span>{{m.shopDistant}}m</span>
            </div>
            <div class="sRightTwo">
                <label>暂无评分</label>
                <span>￥{{m.shopPrice}}/人</span>
                <i>{{m.shopPosi}}</i>
            </div>
            <div class="sRightThree">
                <img :src=m.shopActivity alt="">
                <span>{{m.shopActivityName}}</span>
            </div>
            <div class="sRightFour">
                <p>{{m.shopEvaluation}}</p>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default { 
  name: 'meiShi',
  props:["list"],
  methods:{
        gomsDetails(id){
            this.$router.push({
                path:"dmsdetails",
                query:{
                    id:id
                }
                }); 
        }
  }
  
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
