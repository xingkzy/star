import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1000,
    info: {
      name: 'holle'
    }
  },
  mutations: {
    adds(state) {
      state.counter++
    },
    jians(state, a) {
      state.counter--
    },
    address(state) {
      //state.info['address']='呼和浩特'//这样写无法做到响应式 下面的vue.set方法可以做到响应式
      Vue.set(state.info, 'address', '呼和浩特')
    }
  },
  //异步操作时候使用actions
  actions: {
    Aadds(context){
      setTimeout(() => {
        context.commit('adds')
      }, 1000);
    }
  },
  modules: {}
})