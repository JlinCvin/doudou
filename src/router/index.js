import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './Movie'
import cinmaRouter from './Cinema'
import loginRouter from './Login'

Vue.use(VueRouter)

const routes = [
  movieRouter,
  loginRouter,
  cinmaRouter,
  {
    path : '/*',
    redirect : '/movie'
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
