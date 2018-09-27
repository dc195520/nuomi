import Vue from 'vue'
import Router from 'vue-router'
import nmIndexPages from '@/pages/nmIndexPages'
// import nmIndexPages from "../pages/nmIndexPages"
import nuoMiTuiJian from "../pages/nuoMiTuiJian"
import filmAndci from "../pages/nuoMiFilmAndcinema"
import fujin from "../pages/fuJin"
import meishi from "../pages/meiShi"
import toutiao from "../pages/touTiao"
import shipin from "../pages/shipin"
import dmy from "../pages/dmy"
import nuoMiC1 from "../pages/nuoMiC1"
import nuoMiC2 from  "../pages/nuoMiC2"
import nuoMiC3 from  "../pages/nuoMiC3"
import moveStore from  "../pages/moveStore"
import nuoMIConfirmOrd from  "../pages/nuoMIConfirmOrd"
import nuoMiChioce from  "../pages/nuoMiChioce"
import dmytwo from  "../pages/dmytwo"
import dorder from "../pages/dorder"
import dmsdetails1 from "../pages/dmsdetails1"
import businessPhoto1 from "../pages/businessPhoto1"
import dmsdetails from "../pages/dmsdetails"
import businessPhoto from "../pages/businessPhoto"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nmIndexPages',
      name: 'nmIndexPages',
      component: nmIndexPages,
      meta: {
        show: true
      }
    },
    {
      path: '/',
      name: 'nmIndexPages',
      redirect: nmIndexPages,
      component: nmIndexPages
    },
    {
      path: '/nmIndexPages',
      name: 'nmIndexPages',
      component: nmIndexPages,
      meta: {
        show: true
      }
    },
    {
      path: '/nuoMiTuiJian',
      name: 'nuoMiTuiJian',
      component: nuoMiTuiJian,
      meta: {
        show:false
      }
    },
    {
      path: '/filmAndci',
      name: 'filmAndci',
      component: filmAndci,
      meta: {
        show:false
      }
    },
    {
      path: '/fujin',
      name: 'fujin',
      component: fujin,
      meta: {
        show: true
      }
    },
    {
      path: '/meishi',
      name: 'meishi',
      component: meishi,
      meta: {
        show: true
      }
    },
    {
      path: '/toutiao',
      name: 'toutiao',
      component: toutiao,
      meta: {
        show: true
      }
    },
    {
      path: '/shipin',
      name: 'shipin',
      component: shipin,
      meta: {
        show: true
      }
    },
    {
      path: '/nuoMiC1',
      name: 'nuoMiC1',
      component: nuoMiC1,
      meta: {
        show: true
      }
    }, {
      path: '/dmy',
      name: 'dmy',
      component: dmy,
      meta: {
        show: true
      }
    },
    {
      path:'/dorder',
      name:'dorder',
      component:dorder,
      meta: {
        show: false
      }
    },
    {
      path:'/dmsdetails1/:id',
      name:'dmsdetails1',
      component:dmsdetails1,
      meta: {
        show: false
      }
    },
    {
      path:'/businessPhoto1/:id',
      name:'businessPhoto1',
      component:businessPhoto1,
      meta: {
        show: false
      }
    },
    {
      path: '/dmsdetails',
      name: 'dmsdetails',
      component: dmsdetails,
      meta: {
        show: false
      }
    },
    {
      path: '/businessPhoto',
      name: 'businessPhoto',
      component: businessPhoto,
      meta: {
        show: false
      }
    },
    {
      path: '/nuoMiC2',
      name: 'nuoMiC2',
      component: nuoMiC2,
      meta: {
        show: false
      }
    },
    {
      path: '/nuoMiC3',
      name: 'nuoMiC3',
      component: nuoMiC3,
      meta: {
        show: false
      }
    },
    {
      path: '/moveStore',
      name: 'moveStore',
      component: moveStore,
      meta: {
        show: false
      }
    },
    {
      path: '/nuoMIConfirmOrd',
      name: 'nuoMIConfirmOrd',
      component: nuoMIConfirmOrd,
      meta: {
        show: false
      }
    },
    {
      path: '/nuoMiChioce',
      name: 'nuoMiChioce',
      component: nuoMiChioce,
      meta: {
        show: false
      }
    },{
      path: '/dmytwo',
      name: 'dmytwo',
      component: dmytwo,
      meta: {
        show: false
      }
    },
    {
      path: '/dorder',
      name: 'dorder',
      component: dorder,
      meta: {
        show: false
      }
    }
  ]
})
