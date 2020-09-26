import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Picture from './views/Picture.vue'
import RoverInfo from './views/RoverInfo'

Vue.use(VueRouter)

const routes = [
 {
  path: '/',
  component: Home
 },

 {
  path: '/picture/:roverName',
  component: Picture
 },

 {
   path:'/roverInfo/:roverName',
   component: RoverInfo
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
