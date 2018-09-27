<template>
  <div class="b-tuijian">
     <nuo-mi-file-header :test="date1" :crm="date2" class="b_file_header"></nuo-mi-file-header>
     <movie-public></movie-public>
     <mov-public-totop></mov-public-totop>
  </div>

</template>

<script>
    import NuoMiFileHeader from "../components/nuoMiFilmAndCinema/nuoMiFileHeader";
    import MoviePublic from "../components/moviePublic";
    import MovPublicTotop from "../components/movPublicTotop";
    export default {
        name: "nuoMiFilmAndcinema",
        components: {MovPublicTotop, MoviePublic,NuoMiFileHeader},
        data(){
            return{
                date1:[],
                date2:[]
             }
        },
        created(){
            fetch("http://localhost:3000/api/movelist").then((response)=>{
               if(response.ok){
              response.json().then(data=>{
                this.date1=data;
                })
             }
            });
            fetch("http://localhost:3000/api/mock1").then((response)=>{
               if(response.ok){
                response.json().then(data=>{
                this.date2=data;
              })
            }
          });

        }
    }
</script>

<style scoped>

</style>
