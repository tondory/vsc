// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from '../node_modules/buefy'
import '../node_modules/buefy/dist/buefy.css'
import Bulma from '../node_modules/bulma/css/bulma.css'

Vue.use(Buefy)
Vue.use(Bulma)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
