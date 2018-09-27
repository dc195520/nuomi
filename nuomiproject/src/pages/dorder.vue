<template>
  <div>
    <dorderheader></dorderheader>
    <dordernav></dordernav>
  </div>
</template>

<script>
    import Dorderheader from "../components/dorder/dorderheader";
    import Dordernav from "../components/dorder/dordernav";
    export default {
        name: "dorder",
      components: {Dordernav, Dorderheader}
    }
</script>

<style scoped>

</style>
