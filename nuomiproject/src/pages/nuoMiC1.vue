<template>
    <div>
      <nuo-mi-c1-header></nuo-mi-c1-header>
      <nuo-mi-c1-section :date1="date"></nuo-mi-c1-section>
      <movie-public></movie-public>
      <mov-public-totop></mov-public-totop>
    </div>
</template>

<script>
    import NuoMiC1Header from "../components/nuoMiC1/nuoMiC1Header";
    import NuoMiC1Section from "../components/nuoMiC1/nuoMiC1Section";
    import MoviePublic from "../components/moviePublic";
    import MovPublicTotop from "../components/movPublicTotop";
    export default {
      name: "nuoMiC1",
      components: {MovPublicTotop, MoviePublic, NuoMiC1Section, NuoMiC1Header},
      data(){
        return{
          date:[]
        }
      },
      created(){
        fetch("http://localhost:3000/api/mock1").then((response)=>{
          if(response.ok){
            response.json().then(data=>{
              this.date=data;
              console.log(this.date);
            })
          }
        });
      }
    }
</script>

<style scoped>

</style>
