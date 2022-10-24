import Vue from 'vue'
import VueRouter from 'vue-router'


// 注册插件
Vue.use(VueRouter)

// 定义路由
const routes = []

// 创建router实例
const router = new VueRouter({
    routes,
    // 指定路由模式（默认为hash模式）
    mode: 'history'
})

// 全局路由守卫
// 1、前置守卫
router.beforeEach((to,form,next)=>{

})
// 2、后置守卫
router.afterEach((to,from,next)=>{
    
})
// 导出路由实例
export default router