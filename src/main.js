import Vue from 'vue'
Vue.prototype.$bus = new Vue()
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

//引入echarts
import * as echarts from 'echarts'
//vue全局注入echarts
Vue.prototype.$echarts = echarts;
import axios from 'axios'
Vue.prototype.$axios = axios

import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
