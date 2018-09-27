<template>
   <div>
     <nm-index-header></nm-index-header>
     <div class="a-centerBox">
       <nm-index-serve></nm-index-serve>
       <nm-index-section></nm-index-section>
       <nm-swiper></nm-swiper>
       <nm-like-product :dataList="date"></nm-like-product>
     </div>
   </div>
</template>

<script>
    import NmIndexHeader from "../components/nmIndex/nmIndexHeader";
    import NmIndexServe from "../components/nmIndex/nmIndexServe";
    import NmIndexSection from "../components/nmIndex/nmIndexSection";
    import NmSwiper from "../components/nmIndex/nmSwiper";
    import NmLikeProduct from "../components/nmIndex/nmLikeProduct";
    export default {
      name: "nmIndexPages",
      components: {NmLikeProduct, NmSwiper, NmIndexSection, NmIndexServe, NmIndexHeader},
      data(){
        return{
          date:[]
        }
      },
      methods:{

      },
      created(){
        fetch("http://localhost:3000/api/shoplist").then((response)=>{
          if(response.ok){
            response.json().then(data=>{
              this.date=data
              console.log(this.date[0].feed_list[0].title)
            })
          }
        });
      }
    }
</script>

<style scoped>

</style>
