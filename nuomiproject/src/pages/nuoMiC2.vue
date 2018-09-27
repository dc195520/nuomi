<template>
  <div>
    <nuo-mi-c2-header :date1="date"></nuo-mi-c2-header>
    <nuo-mi-c2-section-two></nuo-mi-c2-section-two>
    <nuo-mi-c2-section-three :date2="date"></nuo-mi-c2-section-three>
    <mov-public-totop></mov-public-totop>
  </div>
</template>

<script>
    import NuoMiC2Header from "../components/nuoMiC2/nuoMiC2Header";
    import NuoMiC2SectionTwo from "../components/nuoMiC2/nuoMiC2SectionTwo";
    import NuoMiC2SectionThree from "../components/nuoMiC2/nuoMiC2SectionThree";
    import MovPublicTotop from "../components/movPublicTotop";

    export default {
      name: "nuoMiC2",
      components: {MovPublicTotop, NuoMiC2SectionThree, NuoMiC2SectionTwo, NuoMiC2Header,},
      data(){
        return{
          date:[]
        }
      },
      methods:{
        init(i){
          fetch("http://localhost:3000/movie/movie01?movieId="+i).then((response)=>{
            if(response.ok){
              response.json().then(data=>{
                this.date=data;
                console.log(this.date);
                console.log("i:"+i);
              });
            }
          });
        }
      },
      created(){
        let movieId=this.$route.params.id1;
        this.init(movieId);
        console.log("movieId:"+movieId);
      }
    }
</script>

<style scoped>

</style>
