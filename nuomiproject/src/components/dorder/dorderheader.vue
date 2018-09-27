<template>
    <div>
      <header>
        <img @click="prev" src="../../assets/images/d1.jpg" alt="">

        <h3>订单列表</h3>
        <p>筛选</p>
      </header>
    </div>
</template>

<script>
    export default {
        name: "dorderheader",
      methods:{
          prev(){
            this.$router.go(-1)
          }
      }
    }
</script>

<style scoped>
  header{
    display: flex;
    width: 100%;
    height: 0.4rem;
    justify-content: space-between;
    align-items: center;
    background: #fdfdfd;
    border-bottom: 2px solid #dddddd;
    padding:0 0.14rem;
    box-sizing: border-box;
  }
  header h3{
    font-size: 0.18rem;
    color: #53535b;
  }
  header p{
    font-size: 0.16rem;
    color: #737373;
  }
  header img{
    width: 0.22rem;
    height: 0.22rem;
  }
</style>
