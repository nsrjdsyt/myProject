import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'

import './assets/css/iconfont.css'
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false

Vue.use(MintUI);


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
