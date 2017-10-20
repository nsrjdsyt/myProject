<template lang="html">
    <h2>双向过滤器</h2>
    <p>输入金额：<input v-model="num | currencyDisplay" type="text" /></p>
    <span>{{num}}</span>
</template>

<script>
import Vue from 'vue';

Vue.filter('currencyDisplay', {
    read(val){ //model -> view
        console.log('read',typeof val);
        return '$' + val.toFixed(2)
    },
    write(newVal, oldVal){ //view -> model

        console.log('write',typeof newVal);

        let _val = +newVal.trim();

        return isNaN(_val) ? 0 : parseFloat(_val.toFixed(2))
    }
});

export default {
    data(){
        return {
            num: 111
        }
    }
}
</script>
