<template>
  <div>
    <dmsdetailsheader1 :id51="id41" :id22="id21"></dmsdetailsheader1>
    <dmsdetailsyh1   :id52="id41" :id23="id21"></dmsdetailsyh1>
    <dmsdeatailstjc1 :id53="id41" :id24="id21"></dmsdeatailstjc1>
    <dmsdeailssjzp1  :id54="id41" :id25="id21"></dmsdeailssjzp1>
  </div>

</template>

<script>
    import Dmsdetailsheader1 from "./dmsdetailsheader1";
    import Dmsdeailssjzp1 from "./dmsdeailssjzp1";
    import Dmsdeatailstjc1 from "./dmsdeatailstjc1";
    import Dmsdetailsyh1 from "./dmsdetailsyh1";
    export default {
        name: "dmsdetailsectionone",
      components: {Dmsdetailsyh1, Dmsdeatailstjc1, Dmsdeailssjzp1 ,Dmsdetailsheader1},
      props:["id21","id41"]

    }
</script>

<style scoped>

</style>
