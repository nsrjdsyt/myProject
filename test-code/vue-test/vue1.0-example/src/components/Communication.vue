<template lang="html">
    <h2>子组件向父组件传递数据</h2>
    <p>父组件数据：{{ msgList | json }}</p>
    <child v-on:child-msg="handle" v-ref:child></child>    <!-- 子组件触发child-msg时，执行handle方法 -->
</template>

<script>
export default {
  data() {
    return {
      msgList: []
    }
  },
  methods: {
    handle(msg) {
    //   console.log(this.$refs.child);
      this.msgList.push(msg);
    }
  },
  components: {
    child: {
      template: `<input v-model="msg" type="text"/> <button @click="addMsg">add msg</button>`,
      data() {
        return {
          msg: ''
        }
      },
      methods: {
        addMsg() {
          let _msg = this.msg.trim();
          if (_msg) {
            this.$emit("child-msg", this.msg); //触发child-msg事件，将child组件的msg传给父组件, 执行父组件里的handle方法
            this.msg = ''
          }
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
