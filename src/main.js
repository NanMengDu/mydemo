import Vue from 'vue'
Vue.prototype.$bus = new Vue()
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


// 动态背景图
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
