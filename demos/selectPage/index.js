// 分页选择器
function SelectPage(config) {
    this.container = config.container;             //放在页面的包装容器，jq对象
    this.pageCount = parseInt(config.pageCount, 10); //总页数
    this.pageNum = parseInt(config.pageNum, 10); //当前页数
    this.changeCallBack = config.changeCallBack; //切换页码回调
}

SelectPage.prototype = {
    init: function() {
        this.renderPage();
        this.bind();
    },
    renderPage: function() {
        var i,
            randerArr = [],
            pageNum = parseInt(this.pageNum, 10),
            pageCount = parseInt(this.pageCount, 10);

        if (pageNum >= pageCount) this.pageNum = pageNum = pageCount; // 当当前页大于或者等于最大页数的时候,当前页等于最大页数

        getRanderArr(); // 获取页数domArr

        this.container.html(template("sn-pages-wrap", { // 渲染页面
            pageNum: pageNum,
            pageCount: pageCount,
            randerArr: randerArr
        }));

        function getRanderArr() {
            if (pageCount < 9) {
                for (i = 0; i < pageCount; i++) {
                    randerArr.push({
                        num: (i + 1)
                    })
                }
            } else {
                if (pageNum < 4) {
                    for (i = 0; i < 4; i++) {
                        randerArr.push({
                            num: (i + 1)
                        })
                    }
                    concatEnd();
                } else if (pageNum >= 4 && pageNum <= (pageCount - 3)) {
                    concatFront();
                    for ((i = pageNum - 2); i < pageNum + 1; i++) {
                        randerArr.push({
                            num: (i + 1)
                        })
                    }
                    concatEnd();
                } else {
                    concatFront();
                    for ((i = pageCount - 4); i < pageCount; i++) {
                        randerArr.push({
                            num: (i + 1)
                        })
                    }
                }
            }

            function concatFront() {
                randerArr = randerArr.concat([{
                        num: 1
                    },
                    {
                        num: '...',
                        noClick: true
                    }
                ])
            }

            function concatEnd() {
                randerArr = randerArr.concat([{
                        num: '...',
                        noClick: true
                    },
                    {
                        num: pageCount
                    }
                ])
            }
        }
    },
    bind: function() {
        var _this = this;

        this.container.off('click', '.page-link').on('click', '.page-link', function() {
            var $this = $(this);

            if ($this.hasClass("current")) {
                return;
            }

            _this.pageNum = $this.attr('data-num'); // 保存当前页数
            _this.changeCallBack && _this.changeCallBack(); // 获取页面数据
            _this.renderPage();
        });

        this.container.off('click', '.page-submit').on('click', '.page-submit', function() {
            var $pageNum = _this.container.find('.page-num');
            var nowNum = $pageNum.val();

            if (!(/^\d+$/).test(nowNum)) {
                alert("请输入正确的数字");
                $pageNum.val('')
                return;
            } else if (nowNum > _this.pageCount || nowNum <= 0) {
                alert("请输入正确的页码")
                $pageNum.val('')
                return;
            }

            _this.pageNum = parseInt(nowNum, 10); // 保存当前页数
            _this.changeCallBack && _this.changeCallBack();
            _this.renderPage();
        });
    }
}

new SelectPage({
    container: $(".content"),
    pageCount: 10,
    pageNum: 1,
    changeCallBack: function() {
        alert(this.pageNum);
    }
}).init();
