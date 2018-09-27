<template>
    <div  id="a-likePlateTittle">
      <div class="a-likePlateTittle" :class="searchBarFixed == true ? 'isFixed' :''">
        <h1>猜你喜欢</h1>
        <span>换一批</span>
      </div>
      <div v-for="(i,index) in dataList" :key="index">
        <div class="a-firstPlate">
          <a href="">
            <h2>{{i.feed_list[0].title}}</h2>
            <h5>{{i.feed_list[0].area}} 6.9km <span>￥<b>{{i.feed_list[0].price}}</b>/人</span></h5>
            <ul>
              <li><img :src=i.feed_list[0].images[0]></li>
              <li><img :src=i.feed_list[0].images[1]></li>
              <li><img :src=i.feed_list[0].images[2]></li>
            </ul>
            <em>{{i.feed_list[0].info.content[0]}}</em>
          </a>
        </div>
        <div class="a-secondPlate">
          <a href="">
            <img :src=i.feed_list[1].images[0]>
            <div>
              <h2>{{i.feed_list[1].title}}</h2>
              <h5>{{i.feed_list[1].area}}  <i>6.9km </i><span>￥<b>{{i.feed_list[1].price}}</b>/人</span></h5>
              <em>{{i.feed_list[1].info.content[0]}}</em>
            </div>
          </a>
        </div>
        <div class="a-firstPlate">
          <a href="">
            <h2>{{i.feed_list[2].title}}</h2>
            <h5>{{i.feed_list[2].area}} 6.9km <span>￥<b>{{i.feed_list[2].price}}</b>/人</span></h5>
            <ul>
              <li><img :src=i.feed_list[2].images[0]></li>
              <li><img :src=i.feed_list[2].images[1]></li>
              <li><img :src=i.feed_list[2].images[2]></li>
            </ul>
            <em>{{i.feed_list[2].info.content[0]}}</em>
          </a>
        </div>
        <!--<div class="a-thirtPlate">-->
          <!--<h2>兰博基尼上演速度与激情，摩托车与其飙车，网友：太帅了</h2>-->
          <!--<img src=""/>-->
          <!--<p>小姐姐说综合</p>-->
        <!--</div>-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "nmLikeProduct",
        props:["dataList"],
        data(){
          return{
            searchBarFixed:false
          }
        },
        mounted(){
          window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
          handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#a-likePlateTittle').offsetTop
            if (scrollTop > offsetTop) {
              this.searchBarFixed = true
            } else {
              this.searchBarFixed = false
            }
          }
        },
      destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>

<style scoped>
#a-likePlateTittle .isFixed{
  position:fixed;
  top:0;
  z-index:9999;
}
.a-likePlateTittle{
  width: 100%;
  height:0.49rem;
  border-bottom: 0.01rem solid #f5f5f5;
  text-align: center;
  display: flex;
  position: relative;
  background-color: #fff;
}
.a-likePlateTittle  h1{
  font-size: 0.16rem;
  line-height: 0.49rem;
  width: 1.2rem;
  margin:0 auto;
}
.a-likePlateTittle  h1::before{
  content: "";
  width: 0.14rem;
  height:0.16rem;
  line-height: 0.16rem;
  display: inline-block;
  background: url("../../assets/image/a-likeTittle01.png") no-repeat 0 0;
  background-size:0.14rem 0.16rem;
  position: relative;
  top:0.03rem;
  left:-0.05rem;
}
.a-likePlateTittle  h1::after{
  content: "";
  width: 0.14rem;
  height:0.16rem;
  line-height: 0.16rem;
  display: inline-block;
  background: url("../../assets/image/a-likeTitle02.png") no-repeat 0 0;
  background-size:0.14rem 0.16rem;
  position: relative;
  top:0.03rem;
  left:0.05rem;
}
.a-likePlateTittle span{
  display: inline-block;
  line-height: 0.49rem;
  font-size: 0.11rem;
  color: #6f6f6f;
  position: absolute;
  right:0.2rem;
}
  .a-firstPlate{
    width: 100%;
    height:1.96rem;
    box-sizing: border-box;
    padding:0.2rem 0.15rem;
    border-top:0.01rem solid #f5f5f5;
    background-color: #fff;
  }
.a-firstPlate h2{
  font-size: 0.17rem;
  color: #333333;
}
.a-firstPlate h5{
  font-size: 0.11rem;
  color: #c1c1c1;
  font-weight: 100;
  line-height: 0.36rem;
}
.a-firstPlate span{
  float: right;
  color: black;
}
.a-firstPlate span b{
  font-size: 0.15rem;
}
.a-firstPlate ul{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.a-firstPlate ul img{
  width: 1.09rem;
  height:0.73rem;
  /*margin-right:0.08rem;*/
}
.a-firstPlate em{
  font-size: 0.1rem;
  color: #b28d48;
  background-color:#fefaee ;
  font-style: normal;
  margin-top:0.13rem;
}
.a-secondPlate{
  width: 100%;
  height:1.16rem;
  box-sizing: border-box;
  padding:0.2rem 0.15rem;
  border-top:0.01rem solid #f5f5f5;
  background-color: #fff;
}
.a-secondPlate a{
  display: flex;
  width: 100%;
}
.a-secondPlate img{
  width: 1.1rem;
  height:0.72rem;
  margin-right:0.1rem;
}
.a-secondPlate div{
  width: 100%;
}
.a-secondPlate h2{
  font-size: 0.17rem;
  color: #333333;
}
.a-secondPlate h5{
  font-size: 0.11rem;
  color: #c1c1c1;
  font-weight: 100;
  line-height: 0.36rem;
}
.a-secondPlate h5 i{
  font-style: normal;
  margin-left:0.05rem;
}
.a-secondPlate h5 span{
  float: right;
  color: black;
}
.a-secondPlate span b{
  font-size: 0.13rem;
}
.a-secondPlate em{
  font-size: 0.1rem;
  color: #b28d48;
  background-color:#fefaee ;
  font-style: normal;
}
  .a-thirtPlate{
    width: 100%;
    height:3.04rem;
    box-sizing: border-box;
    padding:0.2rem 0.15rem;
    border-top:0.01rem solid #f5f5f5;
    background-color: #fff;
  }
.a-thirtPlate h2{
  font-size: 0.17rem;
  color: #333333;
}
.a-thirtPlate img{
  width:3.45rem;
  height:1.95rem;
  margin-top:0.1rem;
}
.a-thirtPlate p{
  font-size: 0.1rem;
  color: #979797;
  line-height: 0.36rem;
}
</style>
