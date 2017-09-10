import Vue from 'vue'
import Router from 'vue-router'
import News from '../components/news.vue'
import Games from '../components/games.vue'
import Community from '../components/community.vue'
import Goods from '../components/goods.vue'
import More from '../components/more.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: News,
    },
    {
      path: '/news',
      component: News,
    },{
      path: '/games',
      component: Games,
    },{
      path: '/community',
      component: Community,
    },{
      path: '/goods',
      component: Goods,
    },{
      path: '/more',
      component: More,
    },
  ]
})
