<template>
    <div>
      <div class="d1_kx">
      </div>
      <div class="d1_dr">
        <div class="dfk">
          <div class="d1_drleft">
            <img src="../../assets/images/d2.jpg" alt="">
            <div class="d1_left1">
              <h3>亚辰单人午市、 夜 ...</h3>
              <div class="d1_left2">
                <span>数量：1</span>
                <span>实付：￥45.9</span>
              </div>
              <p>有效日期至：2018/09/30</p>
            </div>
          </div>
          <div class="d1_drright">
            代付款
          </div>
        </div>
        <div class="d1_fk">
          <p>付款</p>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "dorderlist"
    }
</script>

<style scoped>
  /*d1_kx*/
  .d1_kx{
    width: 100%;
    height: 0.1rem;
    background: #f3f6f5;
  }
  /*.d1_dr*/
  .d1_dr{
    width: 100%;

    background: #fff;
  }
  .dfk{
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #f5f6f6;
    padding:0.16rem 0.13rem 0 0.13rem;
    box-sizing: border-box;
    height: 1rem;

  }
  .d1_drleft{
    display: flex;
    justify-content: space-between;
  }
  .d1_drleft img{
    width: 0.8rem;
    height: 0.62rem;
    margin-right: 0.08rem;
  }
  .d1_left1{
    display: flex;
    flex-direction: column;
  }
  .d1_left1 h3{
    font-size: 0.18rem;
    color: #000000;
  }
  .d1_left2{
    display: flex;

  }
  .d1_left2 span{
    font-size: 0.12rem;
    color: #6a6a6a;
    display: block;
    line-height: 0.22rem;
  }
  .d1_left1 p{
    font-size: 0.12rem;
    color: #6a6a6a;
    line-height: 0.22rem;
  }
  .d1_drright{
    font-size: 0.16rem;
    color: #a2a2a2;
  }
  /*d1_fk*/
  .d1_fk{
    height: 0.4rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding:0 0.13rem 0 0.13rem;
    box-sizing: border-box;

  }
  .d1_fk p{
    width: 0.7rem;
    height: 0.28rem;
    border:1px solid #f0dcb8;
    color: #f0dcb8;
    font-size: 0.14rem;
    border-radius: 5%;
    line-height:  0.28rem;
    text-align: center;

  }

</style>
