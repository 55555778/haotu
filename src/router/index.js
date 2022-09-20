// 引入路由模块 挂载使用哦
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes = [{
    path: '/',
    component: () => import('../pages/Home.vue'),
},
{
    path: '/test',
    component: () => import('../pages/Test.vue'),


},

]


const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    // scrollBehavior: () => ({ y: 0 }),//解决 跳转后不是顶部的问题

    routes
})
export default router