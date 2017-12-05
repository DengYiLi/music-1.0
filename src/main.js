import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png') // 默认图片
})
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/* render函数是渲染一个视图，然后提供给el挂载
   render: function(createElement) {
        return createElement(App);
    }
 */
