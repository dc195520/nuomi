<template>
  <div>
    <div @click="getMovie(da1.movieId)" class="c3_footer">
      <p>选座购票</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "nuoMiC3Footer",
      props:["da1"],
      methods:{
        getMovie(id1){
          this.$router.push({
            name: 'nuoMiC2',
            params:{
              id1: id1
            }
          });
        }
      }
    }
</script>

<style scoped>
  .c3_footer{
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    height: 0.49rem;
    z-index: 999;
  }
  .c3_footer p{
    width: 3.55rem;
    height: 0.39rem;
    text-align: center;
    line-height: 0.39rem;
    background: #bf974d;
    border-radius: 0.04rem;
    color: #fff;
    margin: 0 auto;
    letter-spacing: 1px;
    font-size: 0.15rem;
  }
</style>
