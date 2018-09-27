<template>
    <div>
        <businessPhotoNav :list="getBusinessPhoto"></businessPhotoNav>
    </div>
</template>

<script>
import businessPhotoNav from "../components/businessPhoto/businessPhotoNav";

export default {
  name: 'businessPhoto',
  components:{
      businessPhotoNav,
  },
  data(){
      return {
          getBusinessPhoto:[], 
      }
  },
  methods:{
      Get(){
          let id =this.$route.query.id;
          console.log(id)
          fetch("http://localhost:3000/api/mock3?id="+id).then((response)=>{
              response.json().then(data=>{
                    this.getBusinessPhoto = data;
                    console.log(this.getBusinessPhoto)
              })
          }) 
      }
  },
  created(){
      this.Get();
  }
  
}
</script>

<style scoped>

</style>