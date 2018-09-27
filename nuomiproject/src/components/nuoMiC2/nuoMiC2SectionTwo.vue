<template>
    <div>
      <div class="section_one_two">
        <h3>智能推荐</h3>
        <div class="section_one_two_ff">
          <div class="section_one_two_con">
            <div class="section_one_two_txt">
              <div class="section_one_two_con_le">
                <h4>西安万达影城龙城铭园店</h4>
                <p>今天9月20日 星期六 12:20 国语2D</p>
                <span><i>6号厅</i><i>8排8座</i><i>8排9座</i></span>
              </div>
              <div class="section_one_two_con_ri">
                <p>￥69.9</p>
                <span>含2张票</span>
              </div>
            </div>
            <div class="section_one_two_txt">
              <div class="section_one_two_con_le">
                <h4>西安万达影城龙城铭园店</h4>
                <p>今天9月20日 星期六 12:20 国语2D</p>
                <span><i>6号厅</i><i>8排8座</i><i>8排9座</i></span>
              </div>
              <div class="section_one_two_con_ri">
                <p>￥69.9</p>
                <span>含2张票</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "nuoMiC2SectionTwo"
    }
</script>

<style scoped>
  .section_one_two{
    width: 100%;
    background: #fff;
  }
  .section_one_two h3{
    font-size: 0.16rem;
    font-weight: 100;
    color: #000;
    line-height: 0.32rem;
    padding-top: 0.05rem;
    margin-left: 0.1rem;
  }
  .section_one_two_ff{
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 0.14rem;
  }
  .section_one_two_ff::-webkit-scrollbar{
    height: 0;
  }
  .section_one_two_con{
    display: flex;
    padding-right: 0.1rem;
  }
  .section_one_two_txt{
    width: 3.14rem;
    height: 0.7rem;
    background: #fffbf4;
    border: 1px solid #e2cea9;
    display: flex;
    justify-content: space-between;
    padding: 0 0.17rem 0 0.09rem;
    margin-left: 0.1rem;
  }
  .section_one_two_con_le{

  }
  .section_one_two_con_le h4{
    font-size: 0.16rem;
    color: #000000;
    line-height: 0.28rem;
    font-weight: 100;
    margin-top: 0.02rem;
  }
  .section_one_two_con_le p{
    font-size: 0.12rem;
    color: #8d8d8e;
  }
  .section_one_two_con_le span{
    display: flex;
    line-height: 0.21rem;
  }
  .section_one_two_con_le span i{
    display: block;
    font-size: 0.12rem;
    color: #bf974d;
    font-style: normal;
    margin-left: 0.04rem;
  }
  .section_one_two_con_le span i:first-child{
    font-size: 0.12rem;
    color: #a5a4a3;
    margin-left: 0;
  }
  .section_one_two_con_ri{
    border-left: 1px solid #e0cba4;
    margin: 0.08rem 0;
    padding-left: 0.15rem;
  }
  .section_one_two_con_ri p{
    font-size: 0.18rem;
    color: #ba8f3f;
    margin-top: 0.06rem;
  }
  .section_one_two_con_ri span{
    font-size: 0.12rem;
    color: #a09f9f;
    display: block;
    margin-left: 0.05rem;
  }
</style>
