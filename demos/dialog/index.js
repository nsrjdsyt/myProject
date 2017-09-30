// 所有模块挂到main这个公共变量上，对外只暴露这个变量
var main = {};

main.init = function(){
    var Dialog = main.getDialog();

    var dia = new Dialog({
        content: '确认全部删除吗?',
        isOneBtn: false,
        sureText: '确认',
        cancelText: '取消',
        sureDelCallBack: function() {
            alert("click sure");
        },
        cancelDelCallBack: function() {
            alert("click cancel");
        },
        closeCallBack: function() {
            dia.hide();
        }
    });

    dia.show();
}

//將dialog模块单独封装到一个方法里实现, 该模块里变量不会污染到其他模块里，保证模块间的解耦，各模块挂到一个公共的变量上
main.getDialog = function() {

    function Dialog(option) {
        var tpl = '<div class="layer-fixed"></div><div class="dialog-wrap"><p>' +
            option.content +
            '</p><div class="btn-wrap fix">' +
            (option.isOneBtn ?
                '<div class="cancel-del-btn only-one-btn">' + option.cancelText + '</div>' :
                '<div class="sure-del-btn">' + option.sureText + '</div><div class="cancel-del-btn">' + option.cancelText + '</div>') +
            '</div><i class="close-dia-icon"></i></div>';

        this.option = option;
        this.tpl = tpl;
    }

    Dialog.prototype = {
        show: function() {
            var $dialogWrap = null;

            if ($(".dialog-wrap")[0]) {
                $(".layer-fixed").remove();
                $(".dialog-wrap").remove();
            }

            $("body").append($(this.tpl));
            $dialogWrap = $(".dialog-wrap");
            option = this.option;

            $dialogWrap.off('click', ".sure-del-btn").on('click', ".sure-del-btn", function() {
                option.sureDelCallBack && option.sureDelCallBack();
            }).off('click', ".cancel-del-btn").on('click', ".cancel-del-btn", function() {
                option.cancelDelCallBack && option.cancelDelCallBack();
            }).off('click', ".close-dia-icon").on('click', ".close-dia-icon", function() {
                option.closeCallBack && option.closeCallBack();
            });

        },
        hide: function() {
            $(".layer-fixed").remove();
            $(".dialog-wrap").remove();
        }
    }

    return Dialog;
}

// DOM 文档载入完成后执行
$(function(){
    main.init();
});
