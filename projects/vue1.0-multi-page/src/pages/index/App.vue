<template lang="html">
    <div>
        <title title="welcome to index page"></title>
        <p>基于vue-cli的多页面开发</p>
        <a href="./todoList.html">访问todoList 页面</a>
    </div>
</template>

<script>
import Title from './../../components/Title.vue';

export default {
  components: {
    Title
  }
}
</script>
