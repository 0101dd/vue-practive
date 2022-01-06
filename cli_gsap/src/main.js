import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueSplitCharacters from 'vue-split-characters'

Vue.config.productionTip = false
Vue.use(VueSplitCharacters)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
