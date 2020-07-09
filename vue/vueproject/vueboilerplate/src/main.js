import Vue from 'vue'
import router from '@router'
import App from './app.vue'
import '@components/_globals'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
