<template>
  <div id="app">
    <top-header></top-header>
    <div class="content"></div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader"
import BottomNav from "./components/BottomNav"
export default {
  name: 'app',
  components:{
    TopHeader,
    BottomNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 750px;

  height: 100%;
  display: flex;
  flex-direction: column;

}

.content{
 flex: 1;
}


</style>
