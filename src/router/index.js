import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/login.vue'
import Home from '../components/Home/home.vue'
import Welcom from '../components/welcom/welcom.vue'
import Users from '../components/user/users.vue'
import Rights from '../components/power/Rights.vue'
import Roules from '../components/power/Roles.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcom',
      children: [
        {
          path: '/welcom',
          component: Welcom
        },
        {
          path: '/users',
          component: Users
        },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roules }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示方行
  // next() 方行 next('/login') 强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
