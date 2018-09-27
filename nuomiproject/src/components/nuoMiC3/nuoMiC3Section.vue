<template>
  <div>
    <nuo-mi-c3-section-one :da11="da1"></nuo-mi-c3-section-one>
    <nuo-mi-c3-section-two :da13="da1"></nuo-mi-c3-section-two>
    <nuo-mi-c3-section-three :da12="da1"></nuo-mi-c3-section-three>
    <nuo-mi-c3-section-four :da14="da1"></nuo-mi-c3-section-four>
    <nuo-mi-c3-section-five></nuo-mi-c3-section-five>
    <nuo-mi-c3-section-six :da15="da1"></nuo-mi-c3-section-six>
    <nuo-mi-c3-section-seven></nuo-mi-c3-section-seven>
    <nuo-mi-c3-section-eight></nuo-mi-c3-section-eight>
  </div>
</template>

<script>
    import NuoMiC3SectionOne from "./nuoMiC3SectionOne";
    import NuoMiC3SectionTwo from "./nuoMiC3SectionTwo";
    import NuoMiC3SectionThree from "./nuoMiC3SectionThree";
    import NuoMiC3SectionFour from "./nuoMiC3SectionFour";
    import NuoMiC3SectionFive from "./nuoMiC3SectionFive";
    import NuoMiC3SectionSix from "./nuoMiC3SectionSix";
    import NuoMiC3SectionSeven from "./nuoMiC3SectionSeven";
    import NuoMiC3SectionEight from "./nuoMiC3SectionEight";
    export default {
      name: "nuoMiC3Section",
      components: {
        NuoMiC3SectionEight,
        NuoMiC3SectionSeven,
        NuoMiC3SectionSix,
        NuoMiC3SectionFive,
        NuoMiC3SectionFour,
        NuoMiC3SectionThree,
        NuoMiC3SectionTwo,
        NuoMiC3SectionOne
      },
      props:["da1"]
    }
</script>

<style scoped>

</style>
