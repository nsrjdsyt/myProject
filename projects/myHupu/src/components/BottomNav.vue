<template>
  <ul class="bottom-nav">
    <router-link to="/news" tag="li"><i class="news-icon"></i>新闻</router-link>
    <router-link to="/games" tag="li"><i class="news-icon"></i>比赛</router-link>
    <router-link to="/community" tag="li"><i class="news-icon"></i>社区</router-link>
    <router-link to="/goods" tag="li"><i class="news-icon"></i>识货</router-link>
    <router-link to="/more" tag="li"><i class="news-icon"></i>更多</router-link>
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
  display: block;
  width: 46px;
  height: 46px;
  margin: 0 auto;
  /*background-color: red;*/
}
</style>
