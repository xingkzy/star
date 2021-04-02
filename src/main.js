import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  // components: {
  //   Aapp:App
  // },
  // template: '<App/>',
  render: h => h(App)
}) //.$mount('#app')

import axios from 'axios'

axios({
  url:'http://152.136.185.210:7878/api/m5/home/data?type=sell&page=1a',
}).then(function(aa){
  console.log(aa);
})