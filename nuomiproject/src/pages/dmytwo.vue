<template>
  <div>
    <dmytwoheader></dmytwoheader>
    <dmytwoorder></dmytwoorder>
    <dmytwoqt></dmytwoqt>
    <dmytwofooter></dmytwofooter>
    <movie-public></movie-public>
  </div>
</template>

<script>
    import Dmytwoheader from "../components/dmytwo/dmytwoheader";
    import Dmytwoorder from "../components/dmytwo/dmytwoorder";
    import Dmytwoqt from "../components/dmytwo/dmytwoqt";
    import Dmytwofooter from "../components/dmytwo/dmytwofooter";
    import MoviePublic from "../components/moviePublic";
    export default {
      name: "dmytwo",
      components: {MoviePublic, Dmytwofooter, Dmytwoqt, Dmytwoorder, Dmytwoheader}
    }
</script>

<style scoped>

</style>
