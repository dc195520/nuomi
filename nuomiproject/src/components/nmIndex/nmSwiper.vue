<template>
  <div class="a-swiperBox">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/image/a-swiper01.jpg"/>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/image/a-swiper02.jpg"/>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/image/a-swiper03.jpg"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from '../../../node_modules/swiper/dist/js/swiper.js';

  export default {
    name: "nmSwiper",
    methods: {
      swiper2() {
        let myswiper2 = new Swiper(".a-swiperBox .swiper-container", {
          autoplay: true,
          delay: 1000,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          }
        })
      }
    },
    mounted() {
      this.swiper2()
    }
  }
</script>

<style scoped>

  .a-swiperBox {
    width: 100%;
    box-sizing: border-box;
    padding: 0.15rem;
    height: 1.05rem;
    background-color: #fff;
    margin-bottom: 0.08rem;
  }

  .a-swiperBox .swiper-container {
    width: 100%;
    height: 100%;
  }

  .a-swiperBox .swiper-wrapper {
    width: 3.45rem;
    height: 0.75rem;
  }

  .a-swiperBox .swiper-slide {
    width: 3.45rem;
    height: 0.75rem;
  }

  .a-swiperBox .swiper-slide img {
    width: 3.45rem;
    height: 0.75rem;
  }

  .a-swiperBox .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 2px;
    left: 0;
    width: 100%;
  }

</style>
<style>

  .a-swiperBox .swiper-pagination-bullet {
    width: 0.03rem;
    height: 0.03rem;
    background: rgba(0, 0, 0, 0);
    border: 1px solid rgba(255, 255, 255, 1);
  }

  .a-swiperBox .swiper-pagination-bullet-active {
    background-color: #fff;
  }
</style>
