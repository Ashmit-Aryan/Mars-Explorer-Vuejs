import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Picture from './views/Picture.vue'


Vue.use(VueRouter)

const routes = [
 {
  path: '/',
  component: Home
 },

 {
  path: '/picture/:roverName',
  component: Picture
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
