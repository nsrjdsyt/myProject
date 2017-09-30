# bug list

- [canvas toDataUrl 跨域问题][2]

- [点击label事件触发两次的坑][7]

  ```html
        <input type="checkbox" id="data-time-checkbox" />
        <label class="data-time" for="data-time-checkbox">9月10日</label>
  ```

  给label绑定点击事件，点击label,会触发input 的click事件

## app bugList

- app中 点击高亮问题

  ```css
    .obj {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent; /* For some Androids */
    }
  ```

  [webview中的点击高亮问题][8]
  [如何去除android上a标签产生的边框][9]

- new Date() ios下兼容性问题

    网上解决方案：[ios和android下的区别][1]

## pc bugList
- $（window）.scroll() 页面滚动事件，绑定到window上，不要绑定到document，ie7有兼容问题

- jquery.on()绑定事件时，不要使用链式绑定多个事件，ie7有兼容问题

- jquery下 trim()兼容问题：

    ```js
      String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"");}
    ```

- ie7兼容after、before的方法[此处输入链接的描述][3]
- z-index兼容问题[div层调整z-index属性在IE中无效原因分析及解决方法][4],ie8+
- border-radius, ie9+
- box-sizing, ie8+, [box-sizing-support-in-ie7][5]
- [`inline-block`的兼容性问题][6],ie8+

[1]: http://www.cnblogs.com/jun3101s/p/5585652.html
[2]: http://www.cnblogs.com/rubekid/p/4907347.html
[3]: http://www.cnblogs.com/front-end-develop/p/5754216.html
[4]: http://www.jb51.net/css/73529.html
[5]: https://stackoverflow.com/questions/2909667/box-sizing-support-in-ie7
[6]: http://www.cnblogs.com/charling/p/3358475.html
[7]: http://www.tuicool.com/articles/zqy2Ez
[8]: http://www.barretlee.com/blog/2014/03/31/tap-highlight-in-webview/
[9]: http://www.cnblogs.com/PeunZhang/archive/2013/02/28/2907708.html
