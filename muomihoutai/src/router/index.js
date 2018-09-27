import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import houtaiSec from "@/components/houtaiSection"
import addlist from "../components/houtaiAddList"
import houtaiMovieSec from "../components/houtaiMioveSection"
import addMovielist from "../components/houtaiMioveAddList"
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect:'houtaiSec',
      name: 'houtaiSec',
      component: houtaiSec
    },
    {
      path: '/houtaiSec',
      name: 'houtaiSec',
      component: houtaiSec
    },
    {
      path: '/addlist',
      name: 'addlist',
      component: addlist
    },
    {
      path: '/houtaiMovieSec',
      name: 'houtaiMovieSec',
      component: houtaiMovieSec
    },
    {
      path: '/addMovielist',
      name: 'addMovielist',
      component: addMovielist
    }
  ]
})
