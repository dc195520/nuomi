<template>
    <div>
      <nav>
        <a @click="show(1)" href="javascript:;">全部</a>
        <a @click="show(2)" href="javascript:;">代付款</a>
        <a @click="show(3)" href="javascript:;">可使用</a>
        <a @click="show(4)" href="javascript:;">待评价</a>
        <a @click="show(5)" href="javascript:;">退款</a>
      </nav>
        <dorderlist v-show="flag==1"></dorderlist>
        <dorderlists v-show="flag==2"></dorderlists>
        <dorderlists v-show="flag==3"></dorderlists>
        <dorderlists v-show="flag==4"></dorderlists>
        <dorderlists v-show="flag==5"></dorderlists>
    </div>
</template>


<script>
   import Dorderlist from "./dorderlist";
    import Dorderlists from "./dorderlists";

    export default {
        name: "dordernav",
      components: {Dorderlist, Dorderlists},
      data(){
          return {
            flag:1,

          }
      },
      methods:{
          show(f){
            this.flag=f;
          }
      }
    }
  $(function (){
     $("nav").find("a").click(function() {
       $("nav").find("a").siblings().css({ "borderBottom": "1px solid transparent", "color":"#989898" })
       $(this).css({ "borderBottom": "2px solid #0c0c0c", "color":"#0c0c0c"})
     })
 } )
</script>

<style scoped>
  /*nav*/
  nav{
    display: flex;
    width: 100%;
    height: 0.38rem;
    justify-content: space-around;
    /* align-items: center;*/
    line-height: 0.38rem;
    background: #fff;
    border-bottom: 2px solid #f1f2f2;
  }


  nav a{
    font-size: 0.16rem;
    color: #989898;
    display: block;
    border-bottom: 2px solid transparent;
  }
  nav a:nth-child(1){
    border-bottom: 2px solid #0c0c0c;
    color:#0c0c0c;
  }
</style>
