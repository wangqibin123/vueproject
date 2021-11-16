import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/homes/Home.vue'
Vue.use(VueRouter)

const routes = [
     {
       path: '/',
       component: home
     },
     {
        path:"/hangkong",
        name:"航空",
        component:()=> import ('@/views/hangkongs/hangkong.vue'),
        children:[
          {
            path:"/",
            component:()=> import ('@/views/hangkongs/hk.vue')
          },
          {
            path:"sanxiaosheng",
            name:"sanxiaosheng",
            component:()=> import ('@/views/hangkongs/student/sanxiaosheng.vue')
          },
          {
            path:"gaozhongsheng",
            name:"gaozhongsheng",
            component:()=> import ('@/views/hangkongs/student/gaozhongsheng.vue')
          },
          {
            path:"chuzhongsheng",
            name:"chuzhongsheng",
            component:()=> import ('@/views/hangkongs/student/chuzhongsheng.vue')
          },
          {
            path:"yishusheng",
            name:"yishusheng",
            component:()=> import ('@/views/hangkongs/student/yishusheng.vue')
          },
        ]
     },
    {
      path:"/Service",
      name:"Service",
      component:()=> import ('@/views/Service/service.vue')
    },
    {
      path:"/gaotie",
      name:"gaotie",
      component:()=> import ('@/views/gaotie/gaotie.vue')
    },
    {
      path:"/kongcheng",
      name:"kongcheng",
      component:()=> import ('@/views/kongcheng/kongcheng.vue')
    },
    {
      path:"/youlun",
      name:"youlun",
      component:()=> import ('@/views/youlun/youlun.vue')
    },
    {
      path:"/zhaoshengyaoqiu",
      name:"zhaoshengyaoqiu",
      component:()=> import ('@/views/zhaoshengyaoqiu/zhaoshengyaoqiu.vue')
    },
    {
      path:"/zaixianbaoming",
      name:"zaixianbaoming",
      component:()=> import ('@/views/zaixianbaoming/zaixianbaoming.vue')
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
