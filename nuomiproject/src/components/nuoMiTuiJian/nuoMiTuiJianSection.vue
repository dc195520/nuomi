<template>
    <div>
          <nuo-mi-tui-jian-swiper></nuo-mi-tui-jian-swiper>
          <nuo-mi-tui-jian-nav></nuo-mi-tui-jian-nav>
          <nuo-mi-move-center :alt="m1" :aet="t1"></nuo-mi-move-center>
          <nuo-mi-hot-show :hoter="t1"></nuo-mi-hot-show>
          <nuo-migoodspe :priceest="t1"></nuo-migoodspe>
           <nuo-mid-chioce-goods :priceest="t1"></nuo-mid-chioce-goods>
    </div>


</template>

<script>
    import NuoMiTuiJianSwiper from "./nuoMiTuiJianSwiper";
    import NuoMiTuiJianNav from "./nuoMiTuiJianNav";
    import NuoMiMoveCenter from "./nuoMiMoveCenter";
    import NuoMiHotShow from "./nuoMiHotShow";
    import NuoMigoodspe from "./nuoMigoodspe";
    import NuoMidChioceGoods from "./nuoMidChioceGoods";
    export default {
        name: "nuoMiTuiJianSection",
      components: {NuoMidChioceGoods, NuoMigoodspe, NuoMiHotShow, NuoMiMoveCenter, NuoMiTuiJianNav, NuoMiTuiJianSwiper},
       props:["t1","m1"],
    }
</script>

<style scoped>

</style>
