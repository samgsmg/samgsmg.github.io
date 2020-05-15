import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueMeta, {
  // The component option name that vue-meta looks for meta info on.
  keyName: 'page'
})



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
