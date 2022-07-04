import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

// 导入字体图标
import './assets/fonts/iconfont.css'
// 配置全局样式表
import './assets/css/global.css'

import TreeTable from 'vue-table-with-tree-grid'

// 配置全局axios，方便发起请求
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// http://127.0.0.1:8888/api/private/v1/
// http://175.27.228.178:3434/api/private/v1/
// 通过 axios 请求拦截器添加 token 保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
