<template>
  <ul class="bottom-nav">
    <li class=""><i class="news-icon"></i>新闻</li>
    <li class=""><i class="news-icon"></i>比赛</li>
    <li class=""><i class="news-icon"></i>社区</li>
    <li class=""><i class="news-icon"></i>识货</li>
    <li class=""><i class="news-icon"></i>更多</li>
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
  background-color: red;
}
</style>
