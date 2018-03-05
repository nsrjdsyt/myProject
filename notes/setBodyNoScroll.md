#

```js
let SetBodyNoScrollUtil = (function(bodyCls) {
    let scrollTop,
        rootElement = document.body || document.scrollingElement;
    return {
        afterOpen: function() {
            scrollTop = rootElement.scrollTop;
            rootElement.classList.add(bodyCls);
            rootElement.style.top = -scrollTop + 'px';
        },
        beforeClose: function() {
            rootElement.classList.remove(bodyCls);
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
