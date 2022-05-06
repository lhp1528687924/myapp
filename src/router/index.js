import Vue from 'vue'
import VueRouter from 'vue-router'
import cinemaRotuer from './Cinema'
import moveRotuer from './Move'
import mineRotuer from './Mine'



Vue.use(VueRouter)

const routes = [
  cinemaRotuer,
  moveRotuer,
  mineRotuer,
  { 
    path: '/*', 
    redirect: '/move'
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
