<template>
    <!--<el-container>-->
      <!--<el-header>Header</el-header>-->
      <!--<el-container>-->
        <!--<el-aside width="200px">Aside</el-aside>-->
        <!--<el-main>Main</el-main>-->
      <!--</el-container>-->
    <!--</el-container>-->
  <houtai-header></houtai-header>
</template>

<script>
    import HoutaiAsideLeft from "../components/houtaiAsideLeft";
    import HoutaiHeader from "../components/houtaiHeader";
    export default {
        name: "houtaiPages",
      components: {HoutaiHeader, HoutaiAsideLeft}
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
