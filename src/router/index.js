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
        name:"航空学院",
        component:()=> import ('@/views/hangkongs/hangkong.vue'),
        children:[
          {
            path:"/",
            name:"/",
            component:()=> import ('@/views/hangkongs/hk.vue')
          },
          {
            path:"sanxiaosheng",
            name:"三校生",
            component:()=> import ('@/views/hangkongs/student/sanxiaosheng.vue')
          },
          {
            path:"gaozhongsheng",
            name:"高中生",
            component:()=> import ('@/views/hangkongs/student/gaozhongsheng.vue')
          },
          {
            path:"chuzhongsheng",
            name:"初中生",
            component:()=> import ('@/views/hangkongs/student/chuzhongsheng.vue')
          },
          {
            path:"yikaosheng",
            name:"艺考生",
            component:()=> import ('@/views/hangkongs/student/yikaosheng.vue')
          },
        ]
     },
    {
      path:"/Service",
      name:"vip地勤专业",
      component:()=> import ('@/views/Service/service.vue')
    },
    {
      path:"/gaotie",
      name:"高铁乘务专业",
      component:()=> import ('@/views/gaotie/gaotie.vue')
    },
    {
      path:"/kongcheng",
      name:"空乘专业",
      component:()=> import ('@/views/kongcheng/kongcheng.vue')
    },
    {
      path:"/youlun",
      name:"游轮海城专业",
      component:()=> import ('@/views/youlun/youlun.vue')
    },
    {
      path:"/zhaoshengyaoqiu",
      name:"招生要求",
      component:()=> import ('@/views/zhaoshengyaoqiu/zhaoshengyaoqiu.vue')
    },
    {
      path:"/zaixianbaoming",
      name:"在线报名",
      component:()=> import ('@/views/zaixianbaoming/zaixianbaoming.vue')
    },
    {
      path:"/videos",
      name:"视频",
      component:()=> import ('@/components/videos/index.vue')
    },
    {
      path:"/sichuan",
      name:"四川外国语大学简介",
      component:()=> import ('@/views/sichuan/fours.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
