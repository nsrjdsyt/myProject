<template>
  <div class="top-header">
    <i class="search-icon"></i>
  </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-header{
  width: 100%;
  height: 100px;
  line-height: 100px;
  position: relative;
  background-image: url("../assets/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 170px 40px;
  /*background-color: rgb(191,30,46);*/
  background-color: #fff;
}

.search-icon{
  position:absolute;
  right:18px;
  top: 27px;
  width: 46px;
  height: 46px;
}
</style>
