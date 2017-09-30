/**
* 页面接口service
*/
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default class Service{
    static getNewsNavList(){
        return Vue.axios({
            url:'/mock/newsNavList.json'
        })
    }

    static getNewsListById(id){
        return Vue.axios({
            url:`/mock/newsList-${id}.json`
        })
    }
};
