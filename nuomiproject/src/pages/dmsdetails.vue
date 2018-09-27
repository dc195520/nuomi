<template>
  <div>
    <dmsdetailsectionone :xq="msxq"></dmsdetailsectionone>
    <dmsdetailssectiontwo></dmsdetailssectiontwo>
    <dmsdetailsfooter></dmsdetailsfooter>
  </div>

</template>

<script>

    import Dmsdetailsectionone from "../components/dmsdetails/dmsdetailsectionone";
    import Dmsdetailssectiontwo from "../components/dmsdetails/dmsdetailssectiontwo";
    import Dmsdetailsfooter from "../components/dmsdetails/dmsdetailsfooter";

    export default {
        name: "dmsdetails",
        components: {Dmsdetailssectiontwo, Dmsdetailsfooter, Dmsdetailsectionone},
        data(){
          return{
            msxq:[]
          }
        },
      methods:{
        Can(){
          let id =this.$route.query.id; 
          console.log(id)
          fetch("http://localhost:3000/api/mock3?id="+id).then((response)=>{
                  response.json().then(data=>{
                      this.msxq = data; 
                      // console.log(this.msxq)
                  }) 
             }) 
         }
      },
       created(){
           this.Can();
       }

    }
</script>

<style scoped>

</style>
