/*
  该文件是整个项目的入口文件
 */
// 引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//引入全局混合配置
import { mixin,mixin2 } from "./mixin";

//关闭vue的生产提示
Vue.config.productionTip = false

//配置全局混合
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 创建vue实例对象--VM
new Vue({
  // 完成了将App组件放入容器中的功能
  render: h => h(App),
}).$mount('#app')
