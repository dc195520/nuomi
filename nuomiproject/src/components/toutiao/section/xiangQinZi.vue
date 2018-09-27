<template>
  <div>
    <div class="e_section">
      <section v-for="m in listFive" :key="m.id">
        <div class="e_sectionOne">
          <h3>{{m.navTitle}}</h3>
          <div class="e_sectionCenter">
              <a href="javascript:;" v-for="n in m.navItem" :key="n.id">
                <img v-lazy=n.navItemImg alt="">
                <span>{{n.navItemTitle}}</span>
              </a>
          </div>
        </div>
        <div class="e_sectionTwo">
          <h3>{{m.bannerItem.bannerTitle}}</h3>
          <div class="e_sectionTwoImg">
            <img v-lazy=m.bannerItem.bannerImg alt="">
          </div>
          <div class="e_sectionTwoFot">
            <span>{{m.bannerItem.bannerFrom}}</span>
            <p>{{m.bannerItem.browse}}浏览</p>
          </div>
        </div>
        <div class="e_sectionThree">
            <a href="javascript:;" v-for="p in m.listItem" :key="p.id">
              <div class="e_threeContent">
                <div class="e_threeLeft">
                  <img v-lazy=p.listItemImg alt="">
                </div>
                <div class="e_threeRight">
                  <div class="e_threeTitle">
                    {{p.listItemTitle}}
                  </div>
                  <div class="e_threeRightCenter">
                    <div class="e_centerLeft">
                      <span>￥{{p.listItemPrice}}/人</span>
                      <p>{{p.listItemAddress}}Km</p>
                    </div>
                    <div class="e_centerRight">
                      <p>{{p.browse}}浏览</p>
                    </div>
                  </div>
                  <div class="e_threeRightFot">
                    <p>{{p.comment}}</p>
                  </div>
                </div>
              </div>
            </a>
        </div>
      </section>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'xiangQinZi',
  props:["listFive"],
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.e_section{
  display:flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top:0.86rem;
  margin-bottom:0.5rem;
}
/* 三小图 */
section{
 
}
.e_sectionOne{
  height: 1.95rem;
  padding: 0 0.15rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 1px solid #e1e1e1;
}
.e_sectionOne h3{
  margin-top:0.07rem;
  line-height: 0.42rem;
  font-size:0.18rem;
  color:#181818;

}
.e_sectionCenter{
  display:flex;
  height:1.15rem;

}
.e_sectionCenter a{
  display:block;
  width: 1.1rem;
  margin-left:0.08rem;
}
.e_sectionCenter a img{
  width: 1.1rem;
  height: 1.15rem;

}
.e_sectionCenter a:first-child{
  margin-left:0rem;
}
.e_sectionCenter span{
  display: block;
  width:100%;
  padding:0 5px;
  box-sizing: border-box;
  margin-top:0.1rem;
  color:#2e2e2e;
  text-align: center;
  font-size:0.12rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 中间大图 */
.e_sectionTwo{
  height:3.25rem;
  padding:0 0.15rem;
  border-bottom:1px solid #e1e1e1;
  box-sizing: border-box;
}
.e_sectionTwo h3{
  margin-top:0.08rem;
  line-height: 0.26rem;
  font-size:0.17rem;
  color:#353535;
}
.e_sectionTwoImg{
  margin-top:0.07rem;
  height:2.11rem;
}
.e_sectionTwoImg img{
  width:100%;
  height:100%;
}
.e_sectionTwoFot{
  display:flex;
  justify-content: space-between;
  margin-top:0.12rem;
}
.e_sectionTwoFot span{
  font-size:0.11rem;
  color:#949494;
}
.e_sectionTwoFot p{
  font-size:0.11rem;
  color:#949494;
}
/* 三列表 */
.e_sectionThree{

}
.e_sectionThree a{
  display:block;
  width:100%;
  height:1.2rem;
  padding:0.17rem 0.15rem 0.2rem;
  box-sizing: border-box;
  border-bottom: 1px solid #e1e1e1;
}
.e_threeContent{
  display:flex;
  box-sizing: border-box;
}
.e_threeLeft{
  width:1.1rem;
  height:0.83rem;
}
.e_threeLeft img{
  width:100%;
  height:100%;
}
.e_threeRight{
  margin-left:0.08rem;
  flex:1;
}
.e_threeTitle{
  height:0.47rem;
  color:#000;
  font-size:0.16rem;
  line-height: 0.23rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;

}
.e_threeRightCenter{
  display:flex;
  justify-content: space-between;
}
.e_threeRightCenter p{
  color:#a3a3a3;
  font-size: 0.11rem;
}
.e_centerLeft{
  display:flex;
}

.e_centerLeft span{
  color:#a3a3a3;
  font-size: 0.11rem;
}
.e_centerLeft p{
  margin-left:0.11rem;
  
}
.e_threeRightFot{
  margin-top:0.05rem;
  width:2.27rem;
}
.e_threeRightFot p{
  height:0.17rem;
  background:#fdf2dc;
  color:#be9f5c;
  font-size: 0.1rem;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
