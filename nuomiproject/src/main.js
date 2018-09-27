// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'; 
import  VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import VueLazy from 'vue-lazyload'
Vue.use(VueLazy,{
  loading:'../static/data/image/0a9d0541a8f7ad777da39aec37c1fe4f.gif'
});
Vue.use(VueLazy,{
  loading:'../static/data/image/ljz.gif'
});


import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
