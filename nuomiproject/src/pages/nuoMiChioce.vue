<template>
     <div>
        <nuo-mi-chioce-header :date1="date"></nuo-mi-chioce-header>
        <nuomi-chioce-position :date1="date"></nuomi-chioce-position>
     </div>
</template>

<script>
    import NuoMiChioceHeader from "../components/nuoMiChioce/nuoMiChioceHeader";
    import NuomiChiocePosition from "../components/nuoMiChioce/nuomiChiocePosition";
    export default {
        name: "nuoMiChioce",
        data() {
          return {
            date: []
          }
        },
        components: {NuomiChiocePosition, NuoMiChioceHeader},
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
        let movieId=this.$route.params.id5;
        this.init(movieId);
        console.log("movieId:"+movieId);
      }
    }

</script>

<style scoped>

</style>
