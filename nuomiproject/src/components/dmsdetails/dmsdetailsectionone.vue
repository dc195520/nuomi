<template>
  <div>
    <dmsdetailsheader :one="xq"></dmsdetailsheader>
    <dmsdetailsyh :one="xq"></dmsdetailsyh>
    <dmsdeatailstjc :one="xq"></dmsdeatailstjc>
    <dmsdeailssjzp :one="xq"></dmsdeailssjzp>
  </div>

</template>

<script>
    import Dmsdetailsheader from "./dmsdetailsheader";
    import Dmsdeailssjzp from "./dmsdeailssjzp";
    import Dmsdeatailstjc from "./dmsdeatailstjc";
    import Dmsdetailsyh from "./dmsdetailsyh";
    export default {
        name: "dmsdetailsectionone",
        components: {Dmsdetailsyh, Dmsdeatailstjc, Dmsdeailssjzp ,Dmsdetailsheader},
        props:["xq"]
    }
</script>

<style scoped>

</style>
