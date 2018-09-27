<template>
    <div class="b-tuijian">
        <nuo-mi-tui-jian-header class="b_tuijian_header" ></nuo-mi-tui-jian-header>
        <nuo-mi-tui-jian-section :m1="date1" :t1="date"   class="bsection"></nuo-mi-tui-jian-section>
        <movie-public></movie-public>
        <mov-public-totop></mov-public-totop>
    </div>
</template>

<script>
    import NuoMiTuiJianHeader from "../components/nuoMiTuiJian/nuoMiTuiJianHeader";
    import NuoMiTuiJianSection from "../components/nuoMiTuiJian/nuoMiTuiJianSection";
    import MoviePublic from "../components/moviePublic";
    import movPublicTotop from "../components/movPublicTotop";
    export default {
        name: "nuoMiTuiJian",
      components: {movPublicTotop,MoviePublic,NuoMiTuiJianSection, NuoMiTuiJianHeader},
      data(){
        return{
            date:[],
            date1:[]
        }
      },
      created(){
        fetch("http://localhost:3000/api/movelist").then((response)=>{
          if(response.ok){
            response.json().then(data=>{
              this.date=data
              this.date1=data[0].movieTheater
            })
          }
        });
      }
    }
</script>

<style scoped>
    .b_tuijian_header{
      width: 92%;
      position: fixed;
      top:0;
      z-index: 9999;
    }
    .bsection{
       background:#f4f6f5;
       margin-top: 0.42rem;
       margin-bottom:0.5rem;
    }

</style>
