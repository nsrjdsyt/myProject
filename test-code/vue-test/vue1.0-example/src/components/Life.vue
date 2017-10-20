<template>
<div class="">
  <h1>vue实例的生命周期</h1>
  <p>{{name}}</p>
  <a href="javascript:;" @click="destroy">destroy</a>
  <a href="javascript:;" @click="destroyTrue">destroy(true)</a>
</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      name: "vue"
    }
  },
  methods: {
    destroy() {
      this.$destroy(); //销毁实例，执行钩子函数：beforeDestroy、destroyed
    },
    destroyTrue() {
      this.$destroy(true); //销毁实例，从 DOM 中删除它关联的 DOM 元素或片断。执行钩子函数：detached、beforeDestroy、destroyed
    }
  },
  init() {
    //在实例开始初始化时同步调用。此时数据观测、事件和 watcher 都尚未初始化。
    console.log("init", this);
  },
  created() {
    //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
    //但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
    console.log(this.name); //vue
    console.log("created-建立");
  },
  beforeCompile() {
    console.log("beforeCompile-未开始编译");
  },
  compiled() {
    //在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档。
    console.log("compiled-编译完成");
  },
  attached() {
    //在 vm.$el 插入 DOM 时调用
    console.log("attached-插入DOM成功");
  },
  ready() {
    //在编译结束和 $el 第一次插入文档之后调用
    console.log("ready-一切准备好了");
  },
  detached() { 
    //在 vm.$el 从 DOM 中删除时调用。必须是由指令或实例方法删除，直接操作 vm.$el 不会 触发这个钩子。
    console.log("detached-删除DOM成功");
  },
  beforeDestroy() {
    //在开始销毁实例时调用。此时实例仍然有功能。
    console.log("beforeDestroy-销毁前");
  },
  destroyed() {
    //在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，注意是解绑不是销毁,所有的子实例也已经被销毁。
    console.log("destroyed-已销毁");
  }
}
</script>



<!-- 参考： http://www.cnblogs.com/lily1010/p/5830946.html -->
