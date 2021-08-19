import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// console.log(window.location.hostname);

// I wrote this code to test vue dev tool on production when given a task on kafene.
// if (window.location.hostname === "michellead.netlify.app") {
//   Vue.config.devtools = true
// }

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
