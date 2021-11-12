import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import Hangkong from '@/views/hangkong.vue'

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
     }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
