
var bannerSlide = function (container, options) {
    //应用配置
    this.opt = $.extend({
        event: 'click', //切换触发事件
        mouseOverDelay: 0, //event为mouseover时，切换发生的延迟时间
        auto: true, //是否开启自动切换
        delay: 5000, //自动切换间隔
        duration: 500, //动画持续时间
        showLabel: true, //若为自定义分页标签，则传入选择器
        showBtn: true, //显示上一页 下一页按钮
        onchange: function (page) {
        }, //每次切换完成后的回调函数
        onchangestart: function (page) {
        },
        oninitend: function (container) {
        }
    }, options);
    //相关元素
    this.container = $(container);
    this.preBtn = this.container.find('.btn-pre');
    this.nextBtn = this.container.find('.btn-next');
    this.items = this.container.find('.banner>li');
    this.index = 0;
    this.pager = null;
    this.timer = null;
    this.animating = false;
    //初始化
    this._init();
};
bannerSlide.prototype = {
    _init: function () {
        var the = this;
        //生成标签并绑定事件
        this.opt.showLabel && this.items.size() > 1 && this._createLabel();
        this.to(0);
        //自动切换
        if (this.opt.auto && this.items.size() > 1) {
            this.autoStart();
            this.container.hover(function () {
                the.autoPause();
            }, function () {
                the.autoStart();
            });
        }

        if (this.opt.showBtn) {
            this.preBtn.click(function () {
                the.prev();
            });
            this.nextBtn.click(function () {
                the.next();
            });
        }
        this.opt.oninitend.call(this, this.container);

    },
    _createLabel: function () {
        var the = this,
            dom = [],
            timer, i;
        dom.push('<div class="banner-pager"><ul class="pager">');
        for (i = 1; i <= this.items.size(); i++) {
            dom.push('<li></li>');
        }
        dom.push('</ul></div>');
        this.pager = typeof this.opt.showLabel == 'string' ? this.container.find(this.opt.showLabel) : $(dom.join('')).appendTo(this.container);
        //绑定标签事件
        if (this.opt.mouseOverDelay) {
            this.pager.find('li').hover(function () {
                var index = $(this).index();
                timer = setTimeout(function () {
                    the.to(index);
                }, the.opt.mouseOverDelay);
            }, function () {
                clearTimeout(timer);
            });
        } else {
            this.pager.find('li').bind(this.opt.event, function () {
                the.to($(this).index());
            });
        }
    },
    autoStart: function () {
        var the = this;
        this.timer = setInterval(function () {
            the.next();
        }, this.opt.delay);
    },
    autoPause: function () {
        clearInterval(this.timer);
    },
    prev: function () {
        this.to(this.index == 0 ? this.items.size() - 1 : this.index - 1);
    },
    next: function () {
        this.to(this.index == this.items.size() - 1 ? 0 : this.index + 1);
    },
    to: function (index) {
        var the = this;
        if (this.animating) return false;
        this.opt.onchangestart.call(this, index);
        this.animating = true;
        this.items.stop().eq(index).fadeIn(this.opt.duration, function () {
            the.animating = false;
        }).siblings().fadeOut(this.opt.duration);
        this.pager && this.pager.find('li').eq(index).addClass('current').siblings().removeClass('current');

        this.items.eq(index).find('img[src3]').each(function () {
            var obj = $(this);
            obj.attr('src', obj.attr('src3')).removeAttr('src3');
        });
        this.index = index;
        this.opt.onchange.call(this, index);
    }
};

new bannerSlide($('.banner-wrap'), {
    mouseOverDelay: 200,
    duration: 500,
    delay: 5000,
    oninitend: function (box) {

    }
});
