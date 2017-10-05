<template>
  <ul class="bottom-nav">
    <router-link to="/news" tag="li"><i class="iconfont icon-xinwen"></i><div>新闻</div></router-link>
    <router-link to="/games" tag="li"><i class="iconfont icon-shipin"></i><div>比赛</div></router-link>
    <router-link to="/community" tag="li"><i class="iconfont icon-luntan"></i><div>社区</div></router-link>
    <router-link to="/goods" tag="li"><i class="iconfont icon-goods"></i><div>识货</div></router-link>
    <router-link to="/more" tag="li"><i class="iconfont icon-gengduo"></i><div>更多</div></router-link>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.bottom-nav{
  width: 100%;
  height: 112px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eae9e6;
}
li{
  flex: 1;
  text-align: center;
}
i{
  display: inline-block;
  width: 46px;
  height: 46px;
  margin: 0 auto;
}
</style>
