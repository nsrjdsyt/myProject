<template lang="html">
    <h2>tab组件</h2>
    <tab :tab-navs="tabNavs" :cur-index.sync="curIndex">
        <div v-for="n in 3 | filterBy curIndex">{{n}}</div>
    </tab>
</template>

<script>
var Tab = {
  template: `<div class="tab">
    <ul class="tab-navs clearfix">
    <li v-for="nav in tabNavs" :class="{'cur':$index==curIndex}" @click="changeNav($index)">
        {{nav}}
    </li>
    </ul>
    <div class="tab-items">
        <slot>
            展示切换的内容
        </slot>
    </div>
    </div>`,
  props: ["tabNavs", "curIndex"],
  methods: {
    changeNav(index) {
        if(index !== this.curIndex){
            this.curIndex = index;
        }
    }
  }
}


export default {
  data() {
    return {
        tabNavs: [
            '新闻','娱乐', '体育'
        ],
        curIndex: 0
    }
  },
  methods: {

  },
  components: {
    Tab
  }
}
</script>

<style lang="scss">
    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .tab-navs{
        width: 100%;
        height: 40px;
        li{
            float: left;
            width: 100px;
            height: 40px;
            line-height: 40px;
            margin-right: 20px;
            text-align: center;
            background-color: #e6e6e6;
            cursor: pointer;

            &.cur{
                color: red;
            }
        }
    }

    .tab-items{
        width: 100%;
        height: 150px;
        border: 1px solid gray;
    }
</style>
