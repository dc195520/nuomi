<template>
  <div id="app">
    <router-view></router-view>
    <nm-index-foot v-show="this.$route.meta.show"></nm-index-foot>
  </div>
</template>

<script>
import NmIndexFoot from "./components/pubulick/nmIndexFoot";
export default {
  name: 'App',
  components: {NmIndexFoot}
}
</script>

<style>

</style>
