# css代码片段

- 文本超出截断，用...代替

  ```css
    .ellipsis-1{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .ellipsis-2{
        word-break:break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
  ```

- 文字换行

  ```css
    /*强制不换行*/
    white-space: nowrap;
    /*自动换行*/
    word-wrap: break-word;
    word-break: normal;
    /*强制英文单词断行*/
    word-break: break-all;
  ```

- 清除浮动

  ```css
    .clearfix:after{
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    .clearfix {
      zoom: 1;
    }
  ```

- 实心三角形和箭头样式

    ```html
        <div class="arrow">我是箭头</div>
        我是实心三角：<em class="triangle"></em>
    ```

    ```css
        .arrow::after{
            display: inline-block;
            content: '';
            width: 12px;
            height: 12px;
            border: 2px solid #353d44;
            border-width: 2px 2px 0 0;
            transform: rotate(45deg);
        }
        .triangle{
            display: inline-block;
            width: 0;
            height: 0;
            font-size: 0;
            border-width: 5px;
            border-style: solid;
            border-color: transparent #333 transparent transparent;
        }
    ```
- 文字两边带横线

    ```html
        <span class="has-two-line">text</span>
    ```

    ```css
        .has-two-line{
            position: relative;
        }
        .has-two-line:before,
        .has-two-line:after{
            position: absolute;
            top: 50%;
            content: '';
            width: 30px;
            height: 1px;
            background-color: gray;
        }
        .has-two-line:before{
            left: -50px;
        }
        .has-two-line:after{
            right: -50px;
        }
    ```
- [IOS 禁用高亮](http://hi.barretlee.com/2014/03/31/tap-highlight-in-webview/)

  ```css
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;  
  ```

- min-height: 最小高度兼容代码

  ```css
    .minheight500{min-height:500px;height:auto !important;height:500px;overflow:visible;}
  ```

- [CSS判断横屏竖屏](http://www.w3cways.com/1772.html)
  ```css
    @media screen and (orientation: portrait) {
    /*竖屏 css*/
    }
    @media screen and (orientation: landscape) {
    /*横屏 css*/
    }
  ```

  ```javascript
    //判断手机横竖屏状态：
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
      if (window.orientation === 180 || window.orientation === 0) {
          alert('竖屏状态！');
      }
      if (window.orientation === 90 || window.orientation === -90 ){
          alert('横屏状态！');
      }  
    }, false);
    //移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。
  ```

- 自定义checkbox样式

  ```html
    <input type="checkbox" id="data-time-checkbox" />
    <label class="data-time" for="data-time-checkbox">9月10日</label>
  ```

  - 给label添加背景图片,图片是checkbox样式

      ```css
         input[type='checkbox']{ display: none; }
         input[type='checkbox'] + label{ display: inline-block; padding-left: 26px; background: url("http://owtq081ii.bkt.clouddn.com/select-pro-icon.png") 0 -464px no-repeat; }
         input[type='checkbox']:checked + label{ background-position: 0 -510px; }
      ```

  - [::before模拟label的checkbox样式](https://segmentfault.com/a/1190000003711140)

    ```html
        <div class="checkbox-wrap">
         <input type="checkbox" value="guangpan" name="choose" id="guangpan">
         <label for="guangpan">努力光盘</label>
         <input type="checkbox" value="kaiche" name="choose" id="kaiche">
         <label for="kaiche">减少开车</label>
         <input type="checkbox" value="laiji" name="choose" id="laiji">
         <label for="laiji">垃圾分类</label>
         <input type="checkbox" value="baozhuang" name="choose" id="baozhuang">
         <label for="baozhuang">拒绝过度包装</label>
         <input type="checkbox" value="guandeng" name="choose" id="guandeng">
         <label for="guandeng">随手关灯</label>
         <input type="checkbox" value="yongshui" name="choose" id="yongshui">
         <label for="yongshui">节约用水</label>
        </div>
    ```

    ```css
        .checkbox-wrap{
            width: 90%;
            position: relative;
            margin: 0 auto;
            top: 30%;
            height: 40%;
            background-color: white;
        }
        input[type="checkbox"]{
            /* width: 40px; */
            /* height: 40px; */
            /* -webkit-border-radius: 50%; */
            display: none;
        }
        input[type="checkbox"]+label {
            display: inline-block;
            width: 48%;
            margin-top: 10px;
            margin-left: 5px;
            text-align: left;
            box-sizing: border-box;
        }

        label::before {
            content: "";
            display: inline-block;
            width: 30px;
            height: 30px;
            background: #EEE;
            vertical-align: middle;
            border-radius: 50%;
            margin-right: 5px;
            box-sizing:border-box;
            transition:background ease-in .5s
        }

        input[type="checkbox"]:checked+label::before{
            background-color: rgb(53, 183, 111);
            border: 5px #EEEEEE solid;
        }
    ```
