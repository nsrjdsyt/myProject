<template lang="html">
  <h2>自定义指令time-format</h2>
  <p>时间戳：{{time}}, 格式化成yyyy-MM-dd hh:mm:ss <span v-time-format="time"></span></p>
  <p><input type="button" name="" value="更新时间" @click="time = +new Date()"></p>
</template>

<script>
import Vue from 'vue'
Vue.directive("time-format", {
    bind(){                    //只调用一次，在指令第一次绑定到元素上时调用，如果页面多次使用该指令，bind会多次调用
        console.log("directive - bind");
    },
    update(newVal, oldVal){    //time更新时调用

        console.log("directive - new val:",newVal);   //number类型的时间戳

        var _time = new Date(newVal);

        this.el.innerHTML = `${_time.getFullYear()}-${add0(_time.getMonth()+1)}-${add0(_time.getDate())} ${add0(_time.getHours())}:${add0(_time.getMinutes())}:${add0(_time.getSeconds())}`

        function add0(num){
            return num < 10 ? '0'+num : num;
        }
    },
    unbind(){
        console.log("directive - unbind");
    }
});
export default {
    data(){
        return {
            time: +new Date()
        }
    }
}
</script>

<style lang="css">
</style>
