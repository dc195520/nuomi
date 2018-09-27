<template>
    <div v-if="datt !=null">
        <businessPhotoNav1 :id31="datt"></businessPhotoNav1>
    </div>
</template>

<script>
import businessPhotoNav1 from "../components/businessPhoto1/businessPhotoNav1";

export default {
  name: 'businessPhoto1',
  components:{
      businessPhotoNav1,
  },
  data(){
      return {
        id2:this.$route.params.id,
        datt:null
      }
  },
  created(){
    fetch("http://localhost:3000/api/mocks?shopId="+this.id2).then((response)=>{
      if(response.ok){
        response.json().then(data=>{
          console.log(data);
          this.datt=data
        })
      }
    });
  }



}
</script>

<style scoped>

</style>
