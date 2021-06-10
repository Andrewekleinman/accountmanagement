import App from './App.vue'
import router from './router'
import Vue from 'vue'
import AxiosPlugin from 'vue-axios-cors';

Vue.use(AxiosPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

