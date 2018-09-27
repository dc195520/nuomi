<template>
  <div class="c3_header">
    <img @click="back" src="../../assets/image/wallet_juhe_back_normal.png">
    <p>反贪风暴3</p>
    <img src="../../assets/image/component_icon_nav_fenxiang_normal.png">
  </div>
</template>

<script>
    export default {
      name: "nuoMiC3Header",
      methods:{
        back(){
          this.$router.go(-1);//返回上一层
        }
      }
    }
</script>

<style scoped>
.c3_header{
  width: 92%;
  height: 0.45rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.15rem;
  position: fixed;
  top: 0;
  z-index: 999;
}
.c3_header img:first-child{
  width: 0.1rem;
  height: 0.17rem;
}
.c3_header p{
  font-size: 0.16rem;
  font-weight: 600;
  color: #000;
}
.c3_header img:last-child{
  width: 0.18rem;
  height: 0.18rem;
}
</style>
