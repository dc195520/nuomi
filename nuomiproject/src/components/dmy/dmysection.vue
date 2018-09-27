<template>
  <div>
    <div class="box">
      <dmytop></dmytop>
      <dmycenter></dmycenter>
      <dmyfooter></dmyfooter>
    </div>
  </div>

</template>

<script>
    import Dmytop from "./dmytop";
    import Dmycenter from "./dmycenter";
    import Dmyfooter from "./dmyfooter";
    export default {
        name: "dmysection",
      components: {Dmyfooter, Dmycenter, Dmytop},

    }
</script>

<style scoped>
  .box{
    margin-top: 0.4rem;
  }
</style>
