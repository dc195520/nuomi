<template>
    <div>
       <shi-pin-nav
            :list1="serverList1"
            :list2="serverList2"
            :list3="serverList3"
       ></shi-pin-nav> 
    </div>
</template>

<script>
import shiPinNav from "../components/shipin/shiPinNav";

export default {
  name: 'shiPin',
  components:{
      shiPinNav, 
  },
  data(){
      return{
          serverList1:[],

          serverList2:[],

          serverList3:[],
      }
  },
  created(){ 
        fetch("http://localhost:3000/api/shipin").then((response)=>{
            if(response.ok){
            response.json().then(data=>{

                // this.date=data  全部

                // 推荐
                this.serverList1 = data[0];

                // 美食
                this.serverList2 = data[1];

                // 搞笑
                this.serverList3 = data[2];
                console.log(this.serverList1)
            })
            }
        });
    }
  
}
</script>

<style scoped>

</style>