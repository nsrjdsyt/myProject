// // select 选择器
function Select(config) {
    this.container = config.container; //放在页面的外层容器
    this.selectList = config.selectList; //初始数据
    this.changeCallBack = config.changeCallBack; //切换时回调
};

Select.prototype = {
    init: function() {
        this.container.html(template('select-wrap', {
            selectList: this.selectList,
            curSelectedItem: this.selectList.filter(function(item) {
                return item.selected;
            })[0]
        }));

        this.eventInit();
    },
    eventInit: function() {
        var $selelctWrap = $(".selelct-wrap"),
            $selectedText = $selelctWrap.find(".selected-text"),
            $optionList = $selelctWrap.find(".option-list"),
            $arrowIcon = $selelctWrap.find(".arrow-icon"),
            _this = this;

        $selelctWrap.on("click", ".selected-text-wrap", function(e) {
            e.stopPropagation();

            if ($optionList.css("display") === 'none') {
                expand();
            } else {
                retract();
            }
        });

        $optionList.on("click", "li", function(e) {
            var $this = $(this);

            e.stopPropagation();
            if ($this.hasClass("selected")) {
                return;
            } else {
                $this.addClass("selected").siblings().removeClass("selected");
                $selectedText.text($this.text());
                retract();

                _this.changeCallBack && _this.changeCallBack($this.attr("data-value"));
            }
        });

        $("body").on("click", function(e) {
            if ($optionList.css("display") !== 'none' && !$(e.target).hasClass("option-list")) {
                retract();
            }
        });

        function expand() {
            $optionList.show();
            $arrowIcon.addClass("expand");
        }

        function retract() {
            $optionList.hide();
            $arrowIcon.removeClass("expand");
        }
    }
};

new Select({
    container: $(".content"),
    selectList: [{
            text: '最近一個月',
            value: 'ONEMONTH',
            selected: true
        },
        {
            text: '最近三個月',
            value: 'TREEMONTH',
            selected: false
        },
        {
            text: '最近一年',
            value: 'ONEYEAR',
            selected: false
        }
    ],
    changeCallBack: function(selectedValue) {
        alert(selectedValue);
    }
}).init();
