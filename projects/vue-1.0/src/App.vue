<template>
<div id="app">
  <img class="logo" src="./assets/logo.png">
  <hello></hello>
  <p>
    Welcome to your Vue.js app!
  </p>
  <p>
    To get a better understanding of how this boilerplate works, check out
  </p>
  <p>
    You may also want to checkout
    <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
    <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
  </p>
</div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
}

#app {
  width: 100%;
  max-width: 750px;
  color: #2c3e50;
  margin: -100px auto 0;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
