import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from './router/axios'
import App from './App.vue'
import VueRouter from 'vue-router'
// 引入路由
import router from './router'
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
 
Vue.use(ElementUI)
Vue.config.productionTip = false

// 加载olmap
// import * as WhrdMap from 'basemap-olmap'
// import 'basemap-olmap/dist/basemap-olmap.css'

import * as WhrdMap from '../../olmap/index'

Vue.use(WhrdMap, { request: axios })

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

