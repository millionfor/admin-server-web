import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'home', component: () => import('../pages/home/index') }
  ]
})

export default router