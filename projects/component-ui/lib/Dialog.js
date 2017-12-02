/**
 * Created by Administrator on 2017/11/26.
 */

require.config({
    paths: {
       'jquery': 'jquery-1.9.1.min'
    }
})

define(['widget', 'jquery'], function (widget, $) {

    function Dialog() {
        this.config = {

        }
    }

    Dialog.prototype = $.extend({}, new widget.Widget(), {
        renderUI: function () {

        },
        bindEvent: function () {

        },
        synUI: function () {

        },
        show: function (config) {
            $.extend(this.config, config);
            this.render();
            return this;
        },
        destructor: function () {

        },
        hide: function () {
            this.destroy()
        }

    });

    return {
        Dialog: Dialog
    }
})