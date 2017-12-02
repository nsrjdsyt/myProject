/**
 * Created by Administrator on 2017/11/26.
 */

define(function () {
    function Widget() {
        this.boundingBox = null; //属性： 最外层容器
    }

    Widget.prototype = {
        on: function (type, handler) {
            if(typeof this.handlers[type] === 'undefined'){
                this.handlers[type] = []
            }

            this.handlers[type].push(handler);
            return this;
        },
        fire: function (type, data) {
            if(this.handlers[type] instanceof Array){
                var handlers  = this.handlers[type];

                for(var i=0,len=handlers.length; i<len; i++){
                    handlers[i](data);
                }
            }
        },
        renderUI: function () { //接口： 添加dom节点

        },
        bindEvent: function () { //接口： 监听事件

        },
        synUI: function () { //接口： 初始化组件属性

        },
        render: function (container) {//方法： 渲染组件
            this.renderUI();
            this.handlers = {};
            this.bindEvent();
            this.synUI();
            $(container || document.body).append(this.boundingBox);
        },
        destructor: function () { //接口： 销毁前的处理函数

        },
        destroy: function () { //方法： 销毁组件
            this.destructor();
            this.boundingBox.off();
            this.boundingBox.remove();
        }
    }

    return {
        Widget: Widget
    }
})