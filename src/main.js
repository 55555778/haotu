import Vue from 'vue'
import App from './App.vue'

// 引入ui
import ElementUI from 'element-ui';

// 引入路由
import router from '../src/router/index'
Vue.config.productionTip = false
Vue.config.productionTip = false
// 滑动验证插件

import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);



Vue.use(ElementUI);
// --------------------------------
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
