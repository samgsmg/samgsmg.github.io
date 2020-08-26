import router from './router'
// import store from './store'
import storage from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style

import { ACCESS_TOKEN } from './store/mutation-types'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'

import { i18nRender } from '@/locales'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist
const loginRoutePath = '/user/login'
const defaultRoutePath = '/'

router.beforeEach((to, from, next) => {
  NProgress.start()
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`)
  /* has token */
  if (storage.get(ACCESS_TOKEN)) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.name)) {
      next()
  } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
      NProgress.done()
  }
}
})
router.afterEach(() => {
   NProgress.done() // finish progress bar
})
