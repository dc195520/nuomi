<template>
  <div>
    <div class="section_three">
      <nuo-mi-c2-section-three-top></nuo-mi-c2-section-three-top>
      <nuo-mi-c2-section-three-bot :date21="date2"></nuo-mi-c2-section-three-bot>
    </div>
  </div>
</template>

<script>
    import NuoMiC2SectionThreeTop from "./nuoMiC2SectionThreeTop";
    import NuoMiC2SectionThreeBot from "./nuoMiC2SectionThreeBot";
    export default {
      name: "nuoMiC2SectionThree",
      components: {
        NuoMiC2SectionThreeBot,
        NuoMiC2SectionThreeTop
      },
      props:["date2"]
    }
</script>

<style scoped>
  .section_three{
    margin-top: 0.1rem;
    background: #fff;
  }
</style>
