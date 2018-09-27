<template>
  <div>
    <nuo-mi-c3-header ></nuo-mi-c3-header>
    <nuo-mi-c3-section :da1="da"></nuo-mi-c3-section>
    <nuo-mi-c3-footer :da1="da"></nuo-mi-c3-footer>
    <mov-public-totop></mov-public-totop>
  </div>
</template>

<script>
    import NuoMiC3Header from "../components/nuoMiC3/nuoMiC3Header";
    import NuoMiC3Section from "../components/nuoMiC3/nuoMiC3Section";
    import NuoMiC3Footer from "../components/nuoMiC3/nuoMiC3Footer";
    import MovPublicTotop from "../components/movPublicTotop";
    export default {
      name: "nuoMiC3",
      components: {MovPublicTotop, NuoMiC3Footer, NuoMiC3Section, NuoMiC3Header},
      data(){
        return{
          da:[]
        }
      },
      methods:{
        init(j){
          fetch("http://localhost:3000/movie/movie01?movieId="+j).then((response)=>{
            if(response.ok){
              response.json().then(data=>{
                this.da=data;
                console.log("this.da"+this.da);
                console.log("j:"+j);
              });
            }
          });
        }
      },
      created(){
        let movieId = this.$route.params.id2;
        this.init(movieId);
        console.log("movieIdC3:"+movieId);
      }
    }
</script>

<style scoped>

</style>
