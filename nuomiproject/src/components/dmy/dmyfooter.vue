<template>
  <div>
    <footer>
      <div class="footer1">
        <img src="../../assets/images/d350.gif" alt="">
        <p>我要开店</p>
      </div>
      <h4>- 糯 米 · 我 的 生 活 -</h4>
    </footer>
  </div>

</template>

<script>
    export default {
        name: "dmyfooter"
    }
</script>

<style scoped>
  /*footer*/
  footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 1.0rem;
    background: #f3f6f5;
  }

  .footer1 {
    width: 0.86rem;
    height: 0.28rem;
    border-radius: 0.14rem;
    border: 1px solid #8a8a8a;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer1 img{
    width: 0.14rem;
    height: 0.14rem;
  }
  .footer1 p{
    font-size: 0.12rem;
    color: #454545;
  }
  footer h4{
    font-size: 0.1rem;
    color: #bebebe;
    margin-top: 0.22rem;
  }


</style>
