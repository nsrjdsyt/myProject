<template lang="html">
    <template v-if="isShow">
        <div class="dialog">
            <h2>{{config.title}}</h2>
            <div class="content">
                {{config.content}}
            </div>
            <div class="btns">
                <a href="javascript:;" @click="clickFirstBtn" v-if="config.firstBtnText">{{config.firstBtnText}}</a>
                <a href="javascript:;" @click="clickSecondBtn" v-if="config.secondBtnText">{{config.secondBtnText}}</a>
            </div>
            <i @click="close">X</i>
        </div>
        <div class="layer"></div>
    </template>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    isShow: null,
    config: {
      type: Object,
      default: function() {
        return {
          title: '我是标题，你未设置标题',
          content: '没有设置内容',
          firstBtnText: '取消',
          secondBtnText: '取消',
          firstBtnCallback: null,
          secondBtnCallback: null,
          closeCallback: null
        }
      }
    }
  },
  methods: {
    clickFirstBtn() {
      this.config.firstBtnCallback && this.config.firstBtnCallback();
    },
    clickSecondBtn() {
      this.config.secondBtnCallback && this.config.secondBtnCallback();
    },
    close() {
        this.isShow = false;
        this.config.closeCallback && this.config.closeCallback();
    }
  }
}
</script>

<style lang="scss">
.dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 300px;
    margin-left: -200px;
    margin-top: -150px;
    background-color: #fff;
    z-index: 1000;
    h2 {
        margin: 0;
        height: 40px;
        line-height: 40px;
        font-size: 24px;
        padding: 0 20px;
    }

    .content {
        height: 200px;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        padding: 20px;
        box-sizing: border-box;
    }

    .btns {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            display: inline-block;
            width: 80px;
            height: 40px;
            line-height: 40px;
            margin: 0 10px;
            border: 1px solid gray;
            border-radius: 5px;
            text-align: center;
        }
        a,
        a:hover {
            text-decoration: none;
        }
    }

    i {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
}

.layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
    z-index: 999;
}
</style>
