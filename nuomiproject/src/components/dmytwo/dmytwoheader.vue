<template>
    <div>
      <header>
        <div class="d3_headertop">
          <img @click="back"  src="../../assets/images/d363.gif" alt="">
          <p>我的</p>
          <img src="../../assets/images/d31.gif" alt="">
        </div>
      </header>

      <div class="d3_headerbottom">
        <div class="d3_bottomleft">
          <img src="../../assets/images/d33.gif" alt="">
          <div class="d3_bottomleft2">
            <h3>晴天娃娃</h3>
            <div class="d3_bottomleft3">
              <img src="../../assets/images/d351.gif" alt="">
              <p>普通用户</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "dmytwoheader",
        methods: {
        back() {
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .d3_headertop{
    width: 92%;
    display: flex;
    justify-content: space-between;
    height: 0.4rem;
    padding: 0 0.14rem;
    align-items: center;
    background: #ffffff;
    position: fixed;
    top: 0;
  }
  .d3_headertop img{
    width: 0.21rem;
    height: 0.22rem;
  }
  .d3_headertop p{
    font-size: 0.18rem;
    color: #404040;
    font-weight: 900;

  }

  /*d3_headerbottom*/
  .d3_headerbottom{
    display: flex;
    justify-content: space-between;
    height: 0.95rem;
    padding: 0 0.14rem;
    align-items: center;
    background: #f6f6f6;
    margin-top: 0.4rem;
  }
  .d3_bottomleft{
    display: flex;

  }
  .d3_bottomleft img{
    width: 0.62rem;
    height: 0.62rem;
    border-radius: 0.31rem;

  }
  .d3_bottomleft2{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.15rem;
  }
  .d3_bottomleft2 h3{
    font-size: 0.2rem;
    color: #404040;
  }
  .d3_bottomleft3{
    display: flex;
    width: 0.9rem;
    height: 0.22rem;
    background: #bf974d;
    border: 1px solid #caab71;
    border-radius: 0.11rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
  .d3_bottomleft3 img{
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 0.07rem;
  }
  .d3_bottomleft3 p{
    font-size: 0.11rem;
    color: #f3ecdf;
  }



</style>
