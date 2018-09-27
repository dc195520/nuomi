<template>
    <div>
        <tou-tiao-nav 
            :list1 ="listServe1_1" :item1 ="itemServe1_2"
            :list2 ="listServe1_a" :item2 ="itemServe1_b"
            :list4 ="listServe4"
            :list5 ="listServe5"
            :list6 ="listServe6"
        >
        </tou-tiao-nav>
    </div>
</template>

<script>
import touTiaoNav from "../components/toutiao/touTiaoNav";

export default { 
    name: 'touTiao',
    components:{
        touTiaoNav,
    },
    data(){
        return{
            listServe1_1:[],
            itemServe1_2:[],
            listServe1_a:[],
            itemServe1_b:[],

            listServe4:[],

            listServe5:[],
 
            listServe6:[],
        }
    },
    created(){
        fetch("http://localhost:3000/api/toutiao").then((response)=>{
          if(response.ok){
            response.json().then(data=>{
                
                //推荐
                this.listServe1_1 = data[0].shopList[0].list;
                this.itemServe1_2 = data[0].shopList[0].shopItem[0];
                this.listServe1_a = data[0].shopList[1].list;
                this.itemServe1_b = data[0].shopList[1].shopItem[0];

                // 趣休闲
                this.listServe4 = data[1].shopList;

                //享亲子
                this.listServe5 = data[2].shopList;

                //爱学习
                this.listServe6 = data[3].shopList;
                console.log(this.listServe6)
            })
          }
        });
      }
}
</script>
 
<style scoped>

</style>