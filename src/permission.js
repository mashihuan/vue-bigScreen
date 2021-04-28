import router from '@/router'
import store from '@/store'

import { userInfo } from '@/api/user'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const sessionToken = sessionStorage.getItem('sessionToken')
  if (sessionToken) {
    try {
      const res = await userInfo({ sessionToken })
      await store.commit('user/SET_USER_INFO', res.data)
    } catch (error) {
      sessionStorage.removeItem('sessionToken')
      next(`/login?redirect=${to.path}`)
    }
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

