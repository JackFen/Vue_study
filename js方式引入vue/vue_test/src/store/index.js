// 该文件用于创建Vuex中最为核心的store

// 引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

// 准备actions-用于响应组件中的动作
const actions = {
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            console.log('处理了一些事情--jiaOdd');
            context.dispatch('jia',value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    },
    jia(context, value){
        console.log('处理了一些事情--jia');
        context.commit('JIA', value)
    }
}
// 准备mutations-用于操作数据(state)
const mutations = {
    JIA(state, value) {
        // console.log('mutations中的JIA被调用了',state,value);
        state.sum += value
    },
    JIAN(state, value) {
        // console.log('mutations中的JIA被调用了',state,value);
        state.sum -= value
    }
}
// 准备state-用于存储数据
const state = {
    sum: 0, //当前的和
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})