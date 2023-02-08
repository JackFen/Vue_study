/*
  该文件是整个项目的入口文件
 */
// 引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'


//关闭vue的生产提示
Vue.config.productionTip = false

// const Demo = Vue.extend({})

// const d = new Demo()

// Vue.prototype.x = d

// 创建vue实例对象--VM
new Vue({
  // 完成了将App组件放入容器中的功能
  render: h => h(App)
}).$mount('#app')
