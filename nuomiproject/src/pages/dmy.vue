<template>
  <div>
    <dmyheader></dmyheader>
    <dmysection></dmysection>
  </div>
</template>

<script>
    import Dmyheader from "../components/dmy/dmyheader";
    import Dmysection from "../components/dmy/dmysection";
    export default {
        name: "dmy",
      components: {Dmysection, Dmyheader},
}

</script>

<style scoped>

</style>
