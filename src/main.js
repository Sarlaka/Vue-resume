import Vue from 'vue'
import App from './App.vue'
import mintUI from 'mint-ui'
import VueRouter from 'vue-router' 

//引入mint-ui样式
import 'mint-ui/lib/style.css'
//引入mint-ui,vue-router
Vue.use(mintUI)
Vue.use(VueRouter)

import tabInfo from './components/tabInfo.vue'
import tabSkill from './components/tabSkill.vue'
import tabExperience from './components/tabExperience.vue'
import tabContact from './components/tabContact.vue'
//定义路由
const routes = [
  { path: '/tabInfo', component: tabInfo },
  { path: '/tabSkill', component: tabSkill },
  { path: '/tabExperience', component: tabExperience },
  { path: '/tabContact', component: tabContact },
  { path: '*', redirect: '/tabInfo' }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
