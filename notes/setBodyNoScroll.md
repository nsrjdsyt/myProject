#

```js
let SetBodyNoScrollUtil = (function(bodyCls) {
    let scrollTop,
        rootElement = document.body || document.scrollingElement;
    return {
        afterOpen: function() {
            scrollTop = rootElement.scrollTop;
            document.body.classList.add(bodyCls);
            document.body.style.top = -scrollTop + 'px';
        },
        beforeClose: function() {
            document.body.classList.remove(bodyCls);
            rootElement.scrollTop = scrollTop;
        }
    };
})('body-no-scroll');

export default SetBodyNoScrollUtil;
```

```css
.body-no-scroll{
  position: fixed;
  width: 100%;
}
```
