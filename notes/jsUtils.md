# js 代码片段

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

- [js 判断IOS, 安卓][1]

    ```javascript
    var u = navigator.userAgent,
        app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    alert('是否是Android：' + isAndroid);
    alert('是否是iOS：' + isiOS);
    ```

- [js判断微信客户端][2]

    ```javascript
    // Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12F70 MicroMessenger/6.1.5 NetType/WIFI
    function isWechat() {  
        var ua = navigator.userAgent.toLowerCase();
        return /micromessenger/i.test(ua) || /windows phone/i.test(ua);
    }
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
