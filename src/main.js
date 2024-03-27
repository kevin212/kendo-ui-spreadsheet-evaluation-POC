import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import '@progress/kendo-ui';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.config.productionTip = false
