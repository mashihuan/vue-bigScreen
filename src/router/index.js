import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/default'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },

  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },

  {
    path: '*',
    redirect: '/'
  }
]
const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
