import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use({
  install(V){
    V.prototype.$res = (path)=>{
      return `${process.env.BASE_URL}${path}`;
    }
  }
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
