import Vue from 'vue'
import App from './App'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.axios.get('/mock/data.json').then(function(res) {
  console.log(res.data);
});

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
