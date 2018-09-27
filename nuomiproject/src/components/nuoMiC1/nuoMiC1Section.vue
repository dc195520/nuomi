<template>
  <div>
    <nuo-mi-c1-section-one></nuo-mi-c1-section-one>
    <nuo-mi-c1-section-two></nuo-mi-c1-section-two>
    <nuo-mi-c1-section-three :date1="date1"></nuo-mi-c1-section-three>
  </div>
</template>

<script>
    import NuoMiC1SectionOne from "./nuoMiC1SectionOne";
    import NuoMiC1SectionTwo from "./nuoMiC1SectionTwo";
    import NuoMiC1SectionThree from "./nuoMiC1SectionThree";
    export default {
      name: "nuoMiC1Section",
      components: {NuoMiC1SectionThree, NuoMiC1SectionTwo, NuoMiC1SectionOne},
      props:["date1"]
    }
</script>

<style scoped>

</style>
