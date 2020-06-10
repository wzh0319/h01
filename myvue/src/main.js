import Vue from 'vue'
import App from './App.vue'
console.log(1)
Vue.config.productionTip = false
console.log(1) 
new Vue({
  render: h => h(App),
}).$mount('#app')
