<template>
<div id="app">
  <add-todo-list></add-todo-list>
  <hr>
  <life></life>
  <!-- 执行的钩子函数: init、created、beforeCompile、compiled、attached、ready -->
  <hr>
  <h1 @click="isShow = true;">点击我显示dialog,isShow={{isShow}}</h1>
  <dialog :is-show.sync="isShow" :config="dialogConfig"></dialog>
  <hr>
  <communication></communication>
  <hr>
  <tab-test></tab-test>
  <hr>
  <time-format></time-format>
  <hr>
  <currency-display></currency-display>
</div>
</template>

<script>
import AddTodoList from './components/AddTodoList'
import Life from './components/Life'
import Dialog from './components/Dialog'
import Communication from './components/Communication'
import TabTest from './components/TabTest'
import TimeFormat from './components/TimeFormat'
import CurrencyDisplay from './components/CurrencyDisplay'

export default {
  data() {
    return {
      isShow: false,
      dialogConfig: {
        title: '我已设置标题',
        content: '已设置内容',
        firstBtnText: '确认',
        secondBtnText: '取消',
        firstBtnCallback: () => {
          alert("first btn")
        },
        secondBtnCallback: () => {
          alert("second btn")
        },
        closeCallback: () => {
          alert("close")
        }
      }
    }
  },
  components: {
    AddTodoList,
    Life,
    Dialog,
    Communication,
    TabTest,
    TimeFormat,
    CurrencyDisplay
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
}
</style>
