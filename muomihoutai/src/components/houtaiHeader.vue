<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="2">百度糯米后台管理系统</el-menu-item>
      <el-submenu index="1">
        <template slot="title">处理中心</template>
        <router-link to="houtaiSec"><el-menu-item index="1-1">美食板块</el-menu-item></router-link>
        <router-link to="houtaiMovieSec"><el-menu-item index="1-2">电影板块</el-menu-item></router-link>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">关于我们</a></el-menu-item>
    </el-menu>
    <br>
  </div>
</template>

<script>
    export default {
      name: "houtaiHeader",
      data(){
        return{
          activeIndex2: '1'
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>

</style>
