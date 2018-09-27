<template>
  <div>
    <div class="c2_header_con" v-bind:style="{backgroundImage:'url(' + date1.movieBgImg + ')', backgroundSize:'cover'}">
      <nuo-mi-c2-header-top  :date11="date1"></nuo-mi-c2-header-top>
      <nuo-mi-c2-section-one :date12="date1"></nuo-mi-c2-section-one>
    </div>
  </div>
</template>

<script>
    import NuoMiC2HeaderTop from "./nuoMiC2HeaderTop";
    import NuoMiC2SectionOne from "../nuoMiC2/nuoMiC2SectionOne";
    export default {
      name: "nuoMiC2Header",
      components: {NuoMiC2SectionOne, NuoMiC2HeaderTop},
      props:["date1"]
    }
</script>

<style scoped>
.c2_header_con{
  width: 100%;
  /*background: url("../../assets/image/d833c895d143ad4b3e4883fb8f025aafa40f06a3.jpg");*/
  /*background-size: cover;*/
}
</style>
