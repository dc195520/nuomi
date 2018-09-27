<template>
  <div v-if="dats != null && datd != null">
    <dmsdetailsectionone1 :id21="dats" :id41="datd" ></dmsdetailsectionone1>
    <dmsdetailssectiontwo1></dmsdetailssectiontwo1>
    <dmsdetailsfooter1></dmsdetailsfooter1>
  </div>

</template>

<script>

    import Dmsdetailsectionone1 from "../components/dmsdetails1/dmsdetailsectionone1";
    import Dmsdetailssectiontwo1 from "../components/dmsdetails1/dmsdetailssectiontwo1";
    import Dmsdetailsfooter1 from "../components/dmsdetails1/dmsdetailsfooter1";

    export default {
      name: "dmsdetails",
      components: {Dmsdetailssectiontwo1, Dmsdetailsfooter1, Dmsdetailsectionone1},
      data() {
        return {
          id2: this.$route.params.id,
          dats: null,
          datd:null
        }
      },

      created() {
          fetch("http://localhost:3000/api/mocks?shopId=" + this.id2).then((response) => {
            if (response.ok) {
              response.json().then(data => {
                this.dats = data;
                this.datd=data.ProductDetails[0];
                console.log(data.shopId);
                // console.log(data.ProductDetails[0]);
              })
            }
          })
      }
    }
</script>

<style scoped>

</style>
