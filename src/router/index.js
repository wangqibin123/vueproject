import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import Hangkong from '@/views/hangkong.vue'
import zaixianbaoming from '@/views/zaixianbaoming.vue'
import Service from '@/views/Service/service.vue'
Vue.use(VueRouter)

const routes = [
     {
       path: '/',
       component: home
     },
     {
        path:"/hangkong",
        name:"航空",
        component:Hangkong
     },
     {
      path:"/zaixianbaoming",
      name:"zaixianbaoming",
      component:zaixianbaoming
    },
    {
      path:"/Service",
      name:"Service",
      component:Service
    },
    {
      path:"/gaotie",
      name:"gaotie",
      component:()=> import ('@/views/gaotie.vue')
    },
    {
      path:"/kongcheng",
      name:"kongcheng",
      component:()=> import ('@/views/kongcheng.vue')
    },
    {
      path:"/yishusheng",
      name:"yishusheng",
      component:()=> import ('@/views/yishusheng.vue')
    },
    {
      path:"/youlong",
      name:"youlong",
      component:()=> import ('@/views/youlong.vue')
    },
    {
      path:"/zhaoshengyaoqiu",
      name:"zhaoshengyaoqiu",
      component:()=> import ('@/views/zhaoshengyaoqiu.vue')
    },
    {
      path:"/videos",
      name:"videos",
      component:()=> import ('@/components/videos/index.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
