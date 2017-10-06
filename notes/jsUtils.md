# js 代码片段

- css命名与驼峰命名转换，[zepto里源码][7]
    - CSS命名方式转驼峰命名方式
    ```js
    var camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
    camelize('font-size')  // "fontSize"
    ```
    - 驼峰转CSS命名方式
    ```js
    function dasherize(str) {
      return str.replace(/::/g, '/')
             .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
             .replace(/([a-z\d])([A-Z])/g, '$1_$2')
             .replace(/_/g, '-')
             .toLowerCase()
    }
    dasherize('fontSize')  // "font-size"
    ```

- 数组去重
    - 使用filter，zepto里使用的方法
        ```js
        var uniq = function(array){
            return [].filter.call(array, function(item, idx){ return array.indexOf(item) == idx })
        }
        uniq([1,2,3,3]) //[1, 2, 3]
        ```
    - [使用es6里的set][6]
        ```js
        [...new Set(array)]
        ```

- [类型判断][5]

    ```js
    //数组类型判断
    var isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }

    isArray([]) // true

    //类型判断
    var is = function (obj,type) {
        return (type === "Null" && obj === null) ||
        (type === "Undefined" && obj === void 0 ) ||
        (type === "Number" && isFinite(obj)) ||
        Object.prototype.toString.call(obj).slice(8,-1) === type;
    }

    is([], "Array")
    is({}, "Object")
    is(null, "Null")
    is(undefined, 'Undefined')
    is(function(){}, 'Function')
    is('','String')
    is(2,'Number')
    //以上均为true
    ```
- cookie操作

    ```javascript
    function getCookie(name) {
        var c;
        return (c = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"))) ? decodeURIComponent(c[2].replace(/\+/g, "%20")) : null
    }

    function setCookie(name,value,expiredays) {
        var exDate=new Date();

        exDate.setDate(exDate.getDate() + expiredays);
        document.cookie = name + "=" + encodeURIComponent(value) + ((expiredays == null) ? "" : ";expires=" + exDate.toGMTString()) + ";path=/";
    }
    ```

- url里查询参数解析

    ```javascript
    getUrlParams: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]); return null;
    }
    ```

- 时间戳解析成 yyyy.mm.dd 格式

    ```javascript
    function (time) {
        var y,m,d;

        time = new Date(parseInt(time));
        y = time.getFullYear();
        m = time.getMonth()+1;
        d = time.getDate();

        function add0(m){
            return m < 10 ? '0' + m : m
        }

        return y + '.' + add0(m) + '.' + add0(d);
    }
    ```

- 当天和当月判断

    ```javascript
    function isToday(date) {
       let today = new Date(),
           offset = 0;

       today.setHours(0);
       today.setMinutes(0);
       today.setSeconds(0);
       today.setMilliseconds(0);
       offset = date.getTime() - today.getTime();

       return offset >= 0 && offset <= 1000 * 60 * 60 * 24;
    }

    function isCurrentMonth(date) {
       let today = new Date();

       if (today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth()) {
           return true;
       } else {
           return false;
       }
    }
    ```

- 浏览器检测，判断是否支持canvas

    ```javascript
    function canvasSupport() {
        return !!document.createElement('canvas').getContext;
    }
    ```

- [js 判断IOS, 安卓][1],[浏览器类型判断][8]

    ```javascript
    var ua = navigator.userAgent  // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36"
    var platform = navigator.platform
    var webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
        osx = !!ua.match(/\(Macintosh\; Intel /),
        ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
        iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        win = /Win\d{2}|Windows/.test(platform),
        wp = ua.match(/Windows Phone ([\d.]+)/),
        touchpad = webos && ua.match(/TouchPad/),
        kindle = ua.match(/Kindle\/([\d.]+)/),
        silk = ua.match(/Silk\/([\d._]+)/),
        blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
        bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
        rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        playbook = ua.match(/PlayBook/),
        chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
        firefox = ua.match(/Firefox\/([\d.]+)/),
        firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
        ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),
        mobile= !!ua.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios= !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        weixin= ua.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
        qq= ua.match(/\sQQ/i) == " qq" //是否QQ
    ```

- 得到地理位置

    ```javascript
    function getLocation(callback){
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(
              function(p){
                  callback(p.coords.latitude, p.coords.longitude);
              },
              function(e){
                  var msg = e.code + "\n" + e.message;
              }
          );
      }
    }
    ```

- rem计算适配

    ```javascript
    (function(doc, win){
      var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function(){
              var clientWidth = docEl.clientWidth;
              if(!clientWidth) return;
              docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
          };

      if(!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
    ```

- [另外一种rem方案][3]

    ```javascript
    var dpr, rem, scale;
    var docEl = document.documentElement;
    var fontEl = document.createElement('style');
    var metaEl = document.querySelector('meta[name="viewport"]');

    dpr = window.devicePixelRatio || 1; rem = docEl.clientWidth * 2 / 10; scale = 1 / dpr;

    // 设置viewport，进行缩放，达到高清效果
    metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

    // 设置data-dpr属性，留作的css hack之用
    docEl.setAttribute('data-dpr', dpr);

    // 动态写入样式
    docEl.firstElementChild.appendChild(fontEl);
    fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
    ```

- [px2rem][4]

  remUnit 设置为50, 视觉稿750*x

    ```css
    html {
        font-size: 50px
    }

    body {
        font-size: 24px
    }

    @media screen and (min-width:320px) {
        html {
            font-size: 21.33px
        }

        body {
            font-size: 12px
        }
    }

    @media screen and (min-width:360px) {
        html {
            font-size: 24px
        }

        body {
            font-size: 12px
        }
    }

    @media screen and (min-width:375px) {
        html {
            font-size: 25px
        }

        body {
            font-size: 12px
        }
    }

    @media screen and (min-width:384px) {
        html {
            font-size: 25.6px
        }

        body {
            font-size: 14px
        }
    }

    @media screen and (min-width:400px) {
        html {
            font-size: 26.67px
        }

        body {
            font-size: 14px
        }
    }

    @media screen and (min-width:414px) {
        html {
            font-size: 27.6px
        }

        body {
            font-size: 14px
        }
    }

    @media screen and (min-width:424px) {
        html {
            font-size: 28.27px
        }

        body {
            font-size: 14px
        }
    }

    @media screen and (min-width:480px) {
        html {
            font-size: 32px
        }

        body {
            font-size: 15.36px
        }
    }

    @media screen and (min-width:540px) {
        html {
            font-size: 36px
        }

        body {
            font-size: 17.28px
        }
    }

    @media screen and (min-width:720px) {
        html {
            font-size: 48px
        }

        body {
            font-size: 23.04px
        }
    }

    @media screen and (min-width:750px) {
        html {
            font-size: 50px
        }

        body {
            font-size: 24px
        }
    }
    ```

[1]: http://caibaojian.com/browser-ios-or-android.html
[2]: http://loo2k.com/blog/detecting-wechat-client/
[3]: http://www.html-js.com/article/3041
[4]: https://www.npmjs.com/package/px2rem
[5]: http://www.jb51.net/article/28737.htm
[6]: http://es6.ruanyifeng.com/#docs/set-map
[7]: ./learnZepto.md
[8]: http://www.cnblogs.com/bergwhite/p/7436583.html
